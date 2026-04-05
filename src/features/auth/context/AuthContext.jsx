import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { sendTokenToBackend } from "../../../api/authApi";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ important
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const token = await firebaseUser.getIdToken();

          const response = await sendTokenToBackend(token);

          if (!response.ok) {
            throw new Error("Backend verification failed");
          }

          setUser(firebaseUser);

          // ✅ Redirect only if user is on auth pages
          if (location.pathname === "/login" || location.pathname === "/signup") {
            navigate("/");
          }

        } else {
          setUser(null);
        }

      } catch (err) {
        console.error(err);

        setUser(null);

        // ❌ Modern toast (non-blocking)
        toast.error("Authentication failed. Please try again.");
      } finally {
        setLoading(false); // ✅ always stop loading
      }
    });

    return () => unsubscribe();
  }, [navigate, location.pathname]);

  // ✅ Prevent UI flicker (VERY IMPORTANT UX)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600 text-sm">Checking authentication...</div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};