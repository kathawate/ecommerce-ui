import { useState } from "react";
import { signupWithEmail } from "../services/firebaseAuth";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await signupWithEmail(email, password);

      // ✅ Success
      setSuccessMessage("Account created successfully!");

      // ✅ Clear form
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (err) {
      // ❌ Error
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          <Link to="/" className="text-pink-500 hover:text-pink-600 transition">
            Adipta
          </Link>
        </h2>
        <p className="text-center text-sm text-gray-500 mt-1 mb-6">
          Create your account
        </p>

        {/* ✅ Success Message */}
        {successMessage && (
          <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm text-center">
            ✅ {successMessage}
          </div>
        )}

        {/* ❌ Error Message */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-600 text-sm text-center">
            ❌ {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignupPage;