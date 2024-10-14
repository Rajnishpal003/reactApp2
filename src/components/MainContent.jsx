// src/components/MainContent.js
import React from "react";
import GameCard from "./GameCard"; // Ensure this path is correct

const MainContent = () => {
  return (
    <div id="page_content_inner" style={{ background: "#000" }}>
      <div
        className="uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 uk-margin-large-bottom hierarchical_show"
        data-uk-grid="{gutter: 20, controls: '#filter'}"
        style={{
          position: "relative",
          height: "900px",
          marginLeft: "-20px",
          marginBottom: "48px",
        }}
      >
        <GameCard
          title="Goa Golden"
          time1="04:05 PM"
          time2="05:05 PM"
          numbers="228 -20- 145"
          image="https://bombaymatka.in/assets/img/play_game.jpg"
          link="/games/game4.html"
        />
        <GameCard
          title="Rajdhani Day"
          time1="03:05 PM"
          time2="05:05 PM"
          numbers="140 -52- 390"
          image="https://bombaymatka.in/disaver2.png"
          link="#"
        />
        <GameCard
          title="Good Morning"
          time1="10:05 AM"
          time2="11:05 AM"
          numbers="337 -30- 145"
          image="https://bombaymatka.in/assets/img/play_game.jpg"
          link="https://bombaymatka.in/Play/Game/21"
        />
      </div>
    </div>
  );
};

export default MainContent;
