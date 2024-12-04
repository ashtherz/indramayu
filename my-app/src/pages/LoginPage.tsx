import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    console.log("Logged in with:", email, password);
    // Navigate to dashboard after login
    navigate("/dashboard");
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;
