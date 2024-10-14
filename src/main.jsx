import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import App from "./App";
//import Sidebar from "./components/Sidebar";
//import MainContent from "./components/MainContent";
import GameCard from "./components/GameCard";
import MainContent from "./components/MainContent";
import App from "./App";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Home } from "lucide-react";
import Ledger from "./components/Ledger";
import ReportForm from "./ReportForm";
import ChangePassword from "./Password";
import Password from "./Password";
import GameGrid from "./components/Gamegrid";
import Game from "./components/Games/game";
import Keypad from "./components/Keypad";
import ClockCanvas from "./assets/Clockcanvas";
import Login from "./login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
