// src/components/GameGrid.js
import React from "react";
import GameCard from "./GameCard"; // Ensure correct import path
import "../Allcss/GameCard.css"; // Optional: Import a CSS file for styles

const GameGrid = () => {
  const games = [
    {
      title: "Goa Golden",
      time1: "04:05 PM",
      time2: "05:05 PM",
      numbers: "228 -20- 145",
      imageUrl: "/img/disawer.png",
      link: "/game",
    },
    {
      title: "Rajdhani Day",
      time1: "03:05 PM",
      time2: "05:05 PM",
      numbers: "140 -52- 390",
      imageUrl: "./img/disaver2.png",
      link: "/game",
    },
    {
      title: "Good Morning",
      time1: "10:05 AM",
      time2: "11:05 AM",
      numbers: "337 -30- 145",
      imageUrl: "./img/disawer.png",
      link: "/game",
    },
    {
      title: "BOMBAY EXP",
      time1: "12:05 PM",
      time2: "01:05 PM",
      numbers: "778 -22- 110",
      imageUrl: "./img/goldstar.png",
      link: "/game",
    },
    {
      title: "GOLDEN",
      time1: "02:05 PM",
      time2: "03:05 PM",
      numbers: "446 -40- 550",
      imageUrl: "./img/goldstar.png",
      link: "/game",
    },
    {
      title: "KALAYAN",
      time1: "04:45 PM",
      time2: "06:45 PM",
      numbers: "588 -1X-",
      imageUrl: "./img/disaver.png",
      link: "/game",
    },
    // Add more games as needed
  ];

  return (
    <div className="game-grid">
      {games.map((game, index) => (
        <GameCard
          key={index}
          title={game.title}
          time1={game.time1}
          time2={game.time2}
          numbers={game.numbers}
          imageUrl={game.imageUrl}
          link={game.link}
        />
      ))}
    </div>
  );
};

export default GameGrid;
