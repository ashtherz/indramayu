import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="w-full h-[100px] bg-[#01347c] flex justify-between items-center px-[60px] py-[20px]">
      {/* Clickable Logo */}
      <Link to="/dashboard">
        <img
          src={logo}
          alt="Logo"
          className="h-[60px] w-auto cursor-pointer" // Larger logo height
        />
      </Link>

      {/* Profile Button */}
      <div className="IconButton p-3 bg-gray-400 rounded-full flex justify-center items-center">
        <div className="User w-6 h-6 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
