import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiTruck,
  FiBarChart,
  FiUsers,
  FiSearch,
  FiMapPin,
  FiUserCheck,
  FiShoppingCart,
  FiBook,
  FiUser,
  FiFlag,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: "I–CETA", path: "/iceta", icon: <FiTruck /> },
    { name: "LE–DIG", path: "/ledig", icon: <FiBarChart /> },
    { name: "BERSU–LING", path: "/bersuling", icon: <FiUsers /> },
    { name: "LA–DA", path: "/lada", icon: <FiSearch /> },
    { name: "DE–KAT", path: "/dekat", icon: <FiMapPin /> },
    { name: "DOK–MARU", path: "/dokmaru", icon: <FiUserCheck /> },
    { name: "KRUW–CIL", path: "/kruwcil", icon: <FiShoppingCart /> },
    { name: "JA–KET", path: "/jaket", icon: <FiBook /> },
    { name: "PE–RI", path: "/peri", icon: <FiUser /> },
    { name: "A–LUR", path: "/alur", icon: <FiFlag /> },
  ];

  return (
    <div
      className={`Sidebar ${
        isCollapsed ? "w-[80px]" : "w-[260px]"
      } h-full bg-white border-r border-gray-200 p-4 transition-all duration-300`}
    >
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`rounded-full bg-gray-300 flex justify-center items-center ${
            isCollapsed ? "w-10 h-10" : "w-12 h-12"
          }`}
        >
        <span className="text-gray-500">
            <FiUser size={isCollapsed ? 20 : 24} />
        </span>

        </div>
        {!isCollapsed && (
          <div>
            <h3 className="text-[#01347c] font-semibold">Bambang Pujakesuma</h3>
            <p className="text-sm text-gray-500">Admin</p>
            <button
              onClick={onLogout}
              className="text-xs text-[#4335d1] hover:underline mt-1"
            >
              Log out
            </button>
          </div>
        )}
      </div>

      {/* Toggle Sidebar */}
      <div className="flex justify-end mb-6">
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
                {isCollapsed ? (
                <FiChevronRight size={24} />
                ) : (
                <FiChevronLeft size={24} />
                )}
            </button>
        </div>

      {/* Menu Items */}
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name} className="flex justify-center">
            <Link
              to={item.path}
              className={`flex items-center gap-4 py-2 px-4 rounded-md text-sm font-medium w-full ${
                location.pathname.startsWith(item.path)
                  ? "bg-[#01347c] text-white"
                  : "text-gray-700 hover:bg-[#01347c] hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
