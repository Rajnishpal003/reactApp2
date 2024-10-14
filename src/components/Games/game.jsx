import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Header from "../Header";
import Marquee from "../Marquee";
import Sidebar from "../Sidebar";
import "./game.css";

const Game = () => {
  return (
    <div>
      <Header />
      <Marquee />
      <div className="ledger-container" style={{ display: "flex" }}>
        <Sidebar />
        <div className="md-card uk-margin-medium-bottom" style={{ flex: 1 }}>
          <div className="md-card-content">
            <div className="card-container">
              <center>
                <span className="button">
                  <Link to="/keypad" className="button-link">
                    {" "}
                    {/* Use Link here */}
                    Open Round
                  </Link>
                </span>
              </center>
              <center>
                <h3 className="title">GOLDSTAR</h3>
              </center>
              <div className="info">-XX-</div>
              <center>
                <span className="button">
                  <a href="/keypad" className="button-link">
                    Close Round
                  </a>
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
