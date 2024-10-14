import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Sidebar from "./components/Sidebar";

const ReportForm = () => {
  const [date1, setDate1] = useState("10-10-2024");
  const [date2, setDate2] = useState("10-10-2024");
  const [draw, setDraw] = useState("all");
  const [superAgentId, setSuperAgentId] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState("");

  const handleDate1Change = (e) => {
    setDate1(e.target.value);
  };

  const handleDate2Change = (e) => {
    setDate2(e.target.value);
  };

  const handleDrawChange = (e) => {
    setDraw(e.target.value);
  };

  const handleSuperAgentIdChange = (e) => {
    setSuperAgentId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (superAgentId === "") {
      setError(true);
      return;
    } else {
      setError(false);
    }

    try {
      const response = await axios.post(
        `https://bombaymatka.in/SALedger/Show/${superAgentId}/${date1}/${date2}`
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

  return (
    <div>
      <Header />
      <Marquee />
      <div className="REport-container" style={{ display: "flex" }}>
        <Sidebar />
        <div className="md-card uk-margin-medium-bottom">
          <div className="md-card-content">
            <form onSubmit={handleSubmit}>
              <div className="uk-grid">
                <div className="uk-width-medium-1-4">
                  <div className="md-input-wrapper md-input-filled">
                    <input
                      name="date1"
                      className="md-input"
                      type="text"
                      value={date1}
                      onChange={handleDate1Change}
                      id="uk_dp_1"
                      data-uk-datepicker="{format:'DD-MM-YYYY'}"
                    />
                    <span className="md-input-bar"></span>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="md-input-wrapper md-input-filled">
                    <input
                      name="date2"
                      className="md-input"
                      type="text"
                      value={date2}
                      onChange={handleDate2Change}
                      id="uk_dp_2"
                      data-uk-datepicker="{format:'DD-MM-YYYY'}"
                    />
                    <span className="md-input-bar"></span>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="md-input-wrapper md-input-filled">
                    <select
                      name="draw"
                      className="md-input"
                      value={draw}
                      onChange={handleDrawChange}
                    >
                      <option value="all">All Draw</option>
                      <option value="26">Madhur Morning</option>
                      <option value="27">Goa Golden</option>
                      <option value="28">Goa</option>
                      <option value="29">Gaziyabad</option>
                      <option value="30">Gali</option>
                      <option value="31">Delhi Bazar</option>
                      <option value="32">Shri Ganesh</option>
                      <option value="33">Disawer patern6</option>
                      <option value="34">Disawer patern7</option>
                      <option value="35">Rajdhani Day</option>
                      <option value="36">Dadar</option>
                      <option value="37">Dev Testing Draw</option>
                      <option value="7">Good Morning</option>
                      <option value="1">BOMBAY EXP</option>
                      <option value="2">GOLDEN</option>
                      <option value="3">KALAYAN</option>
                      <option value="4">GOLDSTAR</option>
                      <option value="5">GOLDEN NIGHT</option>
                      <option value="8">Kalyan Night</option>
                      <option value="14">Rajdhani Night</option>
                      <option value="15">Sridevi</option>
                      <option value="16">Milan Day</option>
                      <option value="17">Milan Night</option>
                      <option value="18">Time Bazar</option>
                      <option value="19">Tara Mumbai Day</option>
                      <option value="20">Sridevi Night</option>
                      <option value="21">Main Bazar</option>
                      <option value="22">Madhur Day</option>
                      <option value="23">Madhur Night</option>
                      <option value="24">Night Time Bazar</option>
                      <option value="25">Tara Mumbai Night</option>
                    </select>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="md-input-wrapper">
                    <input
                      type="submit"
                      className="md-btn md-btn-danger"
                      name="submit"
                      value="Submit"
                      placeholder="Remark"
                    />
                  </div>
                </div>
              </div>
            </form>
            {error && (
              <div id="error" style={{ color: "red" }}>
                Please enter a Super Agent ID
              </div>
            )}
            <hr />
            <div className="uk-overflow-container">
              <div id="single">{result}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
