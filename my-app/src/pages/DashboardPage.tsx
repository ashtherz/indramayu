import React from "react";
import background from "../images/background.svg";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to the login page
    navigate("/");
  };

  return (
    <div className="Dashboard w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar onLogout={handleLogout} />

        {/* Content Area */}
        <div className="Content flex-1 flex justify-center items-center">
          <img
            src={background}
            alt="Background"
            className="w-[50%] h-auto max-w-[600px]" // Adjust size here
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
