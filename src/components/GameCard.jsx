import React from "react";
import "../Allcss/GameCard.css"; // Optional: Import a CSS file for styles

const GameCard = ({ title, time1, time2, numbers, imageUrl, link }) => {
  return (
    <div
      className="game-card"
      style={{
        height: "193px",
        margin: "10px",
        background: `url(${imageUrl}) center/cover no-repeat`,
        boxSizing: "border-box",
        padding: "20px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative", // Set to relative to avoid absolute positioning
      }}
    >
      <h3
        style={{
          fontFamily: "Exo, sans-serif",
          fontSize: "1.7em",
          margin: "15px 0",
        }}
      >
        {title}
      </h3>
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        <span style={{ fontSize: "20px" }}>{time1}</span>
        <span style={{ fontSize: "20px" }}>{time2}</span>
      </div>
      <div style={{ textAlign: "center", fontSize: "25px", padding: "10px 0" }}>
        {numbers}
      </div>
      <center>
        <a
          href={link}
          style={{
            borderRadius: "4px",
            textAlign: "center",
            fontFamily: "ExoLight",
            fontSize: "1.4em",
            display: "inline-block",
            cursor: "pointer",
            color: "#fdfdfd",
            textDecoration: "none",
            background:
              "url(https://bombaymatka.in/PWFButton.png) center/100% 100% no-repeat",
            padding: "3% 0",
            width: "50%",
          }}
        >
          Play Now
        </a>
      </center>
    </div>
  );
};

export default GameCard;
