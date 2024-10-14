import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Ledger from "./components/Ledger"; // Import the Ledger component
import "./Allcss/Home.css"; // Ensure correct import
import GameGrid from "./components/Gamegrid";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Sidebar />
        <Header />

        <div className="main-content">
          <GameGrid /> {/* Include Ledger here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
