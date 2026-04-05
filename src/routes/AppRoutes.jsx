import {  Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
      <Routes>

        {/* ✅ Public pages WITHOUT layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ✅ Pages WITH layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

      </Routes>
  );
};

export default AppRoutes;