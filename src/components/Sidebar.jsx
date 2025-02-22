// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { Grid, FileText, Key, LogOut } from "lucide-react";
import "../assets/Sidebar.css"; // Ensure the CSS file is correct

const menuItems = [
  { icon: Grid, label: "Draw", path: "/" },
  { icon: FileText, label: "Report", path: "/ReportForm" },
  { icon: FileText, label: "Ledger", path: "/ledger" },
  { icon: Key, label: "Password", path: "/password" },
  { icon: LogOut, label: "Logout", path: "/Login" },
];

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">Sahu</div>
      <nav>
        <ul className="sidebar-nav">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-item">
              <Link to={item.path} className="sidebar-link">
                <item.icon className="icon" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
