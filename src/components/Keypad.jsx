import React, { useState } from "react";
import "./keypad.css";
import Header from "./Header";
import Marquee from "./Marquee";
import ClockCanvas from "../assets/Clockcanvas";
import Sidebar from "./Sidebar";

const Keypad = () => {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [flag, setFlag] = useState(0);

  const Getv = () => {
    document.querySelector(".inputnumber").classList.add("current");
    document.querySelector(".inputamount").classList.remove("current");
    if (document.querySelector(".inputnumber").value !== "") {
      setFlag(1);
    }
  };

  const GetA = () => {
    setFlag(0);
    document.querySelector(".inputnumber").classList.remove("current");
    document.querySelector(".inputamount").classList.add("current");
  };

  const input = (value) => {
    let currentValue = document.querySelector(".current").value;
    if (flag === 1) {
      document.querySelector(".current").value = value;
    } else {
      document.querySelector(".current").value = currentValue + value;
    }
    setFlag(0);
  };

  const Del = () => {
    let currentValue = document.querySelector(".current").value;
    document.querySelector(".current").value = currentValue.slice(0, -1);
  };

  const Submit = () => {
    // Submission logic here
    alert(`Number: ${number}, Amount: ${amount}`);
  };

  return (
    <div>
      <Header />
      <Marquee />

      <div
        className="canvas"
        style={{
          position: "absolute",
          top: "67px",
          left: "11px",
          zIndex: "1",
          width: "200px ",
        }}
      >
        <ClockCanvas />
      </div>

      <div className="md-card-content">
        <a
          className="md-btn md-btn-danger md-btn-wave-light waves-effect waves-button waves-light"
          href="#"
          data-uk-modal="{target:'#modal_default'}"
          style={{
            display: "inline-block",
            position: "absolute",
            right: "0",
            padding: "0",
            minheight: "28px",
            background: "#424242",
            color: "#ffffff",
            width: "fit-content",
          }}
        >
          Result
        </a>
        <a
          className="md-btn md-btn-danger md-btn-wave-light waves-effect waves-button waves-light"
          href="#"
          data-uk-modal="{target:'#modal_default1'}"
          style={{
            display: "inline-block",
            position: "absolute",
            right: "0",
            padding: "0",
            minheight: "28px",
            background: "#e53935",
            color: "#ffffff",
            width: "fit-content",
            marginTop: "46px",
          }}
        >
          Details
        </a>
        <select name="type" id="type">
          <option value="1">Normal</option>
          <option value="2">Family</option>
          <option value="5">S.P.</option>
          <option value="18">36-S.P.</option>
          <option value="6">D.P.</option>
          <option value="19">54-D.P.</option>
          <option value="7">Thripal Patti</option>
          <option value="3">Run Patti</option>
          <option value="12">X-Jodi S</option>
          <option value="15">X-Jodi(S+D)</option>
          <option value="13">Moter Patti (S)</option>
          <option value="16">Moter Patti (S+D)</option>
          <option value="17">Range / Series</option>
          <option value="8">64-Patti</option>
          <option value="9">56-Patti</option>
          <option value="10">90-Patti</option>
          <option value="11">30-Patti</option>
          <option value="4">Create Jodi</option>
        </select>
        <h3
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "exo sanssherif",
            fontSize: "1.3em",
            paddingTop: "10px",
          }}
          className="heading_a"
        >
          <b>Goa Golden (Open)</b>
        </h3>
        <h3
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: " Exo, sans-serif",
            fontSize: "1.3em",
          }}
          className="heading_a"
        >
          <b>Lock Time</b>
          <br />
          <b>
            <span id="demo">
              <span className="hours">6</span>
              <span className="blink_black">:</span>
              <span className="min">20</span>
              <span className="blink_black">:</span>
              <span className="second">59</span>
            </span>
          </b>
        </h3>
        <h3 className="heading_a">
          <span style={{ padding: "6px", border: "1px solid" }}>
            Total :{" "}
            <b>
              <span id="totalv">0</span>
            </b>
          </span>
        </h3>
        <div className="uk-grid" data-uk-grid-margin="">
          <div className="uk-width-medium-12 uk-row-first">
            <div className="uk-form-row"></div>
            <table cellspacing="10" style={{ margin: "0 auto" }}>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="number"
                      className="inputnumber"
                      value={number}
                      onClick={Getv}
                      onChange={(e) => setNumber(e.target.value)}
                      name="number"
                      min="0"
                      placeholder="Num"
                      readOnly
                      id="number"
                    />
                  </td>
                  <td colSpan="2">
                    <input
                      type="number"
                      className="inputamount"
                      value={amount}
                      onClick={GetA}
                      onChange={(e) => setAmount(e.target.value)}
                      name="amount"
                      min="0"
                      placeholder="Amount"
                      readOnly
                      id="amount"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="keypad" onClick={() => input("1")}>
                    1
                  </td>
                  <td className="keypad" onClick={() => input("2")}>
                    2
                  </td>
                  <td className="keypad" onClick={() => input("3")}>
                    3
                  </td>
                </tr>
                <tr>
                  <td className="keypad" onClick={() => input("4")}>
                    4
                  </td>
                  <td className="keypad" onClick={() => input("5")}>
                    5
                  </td>
                  <td className="keypad" onClick={() => input("6")}>
                    6
                  </td>
                </tr>
                <tr>
                  <td className="keypad" onClick={() => input("7")}>
                    7
                  </td>
                  <td className="keypad" onClick={() => input("8")}>
                    8
                  </td>
                  <td className="keypad" onClick={() => input("9")}>
                    9
                  </td>
                </tr>
                <tr>
                  <td
                    className="keypad"
                    colSpan="3"
                    onClick={Del}
                    style={{
                      background: "#EE534F",
                    }}
                  >
                    CLR
                  </td>
                  <td className="keypad" colSpan="3" onClick={() => input("0")}>
                    0
                  </td>

                  <td
                    className="keypad"
                    colSpan="3"
                    onClick={Submit}
                    style={{
                      background: "#398E3D",
                    }}
                  >
                    OK
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <table className="uk-table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Num</th>
              <th>Amt</th>
              <th>Details</th>
              <th>Date/time</th>
            </tr>
          </thead>
          <tbody id="getdatav"></tbody>
        </table>
        <center>
          <button id="delall">Delete All Bids</button>
        </center>
      </div>
    </div>
  );
};

export default Keypad;
