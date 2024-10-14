// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Import the Sidebar
import Home from "./Home"; // Your existing Home component
import ReportForm from "./ReportForm"; // Import the ReportForm component
import "./styles.css"; // Import your global CSS
import Ledger from "./components/Ledger";
import Password from "./Password";
import Game from "./components/Games/game";
import Keypad from "./components/Keypad";
import Login from "./login";
function App() {
  return (
    <div className="app-container">
      {" "}
      {/* Wrap everything in a container for styling */}
      {/* Include the Sidebar */}
      <div className="content">
        {" "}
        {/* Content area for routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/Keypad" element={<Keypad />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Ledger" element={<Ledger />} />
          <Route path="/ReportForm" element={<ReportForm />} />{" "}
          <Route path="/login" element={<Login />} />
          {/* Route to ReportForm */}
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
