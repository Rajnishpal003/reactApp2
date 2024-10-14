import React from "react";
import Sidebar from "./Sidebar"; // Adjust the import path as necessary
import Header from "./Header";
import Marquee from "./Marquee"; // Adjust the import path as necessary
import "../components/Ledger.css"; // Import your CSS here

const Ledger = () => {
  return (
    <div>
      <Header />
      <Marquee />
      <div className="ledger-container" style={{ display: "flex" }}>
        <Sidebar />
        <div className="md-card uk-margin-medium-bottom" style={{ flex: 1 }}>
          <div className="md-card-content">
            <div></div>
            <table
              className="uk-table uk-table-striped uk-table-hover uk-table-nowrap uk-table-align-vertical"
              border="1"
            >
              <thead style={{ background: "cadetblue", color: "#fff" }}>
                <tr>
                  <th style={{ color: "#fff" }}>Sn.</th>
                  <th style={{ color: "#fff" }}>Date</th>
                  <th style={{ color: "#fff" }}>Details</th>
                  <th style={{ color: "#fff" }}>Add</th>
                  <th style={{ color: "#fff" }}>Min</th>
                </tr>
              </thead>
              <tbody style={{ color: "black" }}>
                <tr>
                  <td>1</td>
                  <td>25-06-2024</td>
                  <td>Loan Limit</td>
                  <td>200000</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>08-07-2024</td>
                  <td>Limit Limit</td>
                  <td>0</td>
                  <td>187795</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>08-07-2024</td>
                  <td>Limit Limit</td>
                  <td>0</td>
                  <td>100000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>04-10-2024</td>
                  <td>Loan Limit</td>
                  <td>25000</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>05-10-2024</td>
                  <td>Limit Limit</td>
                  <td>0</td>
                  <td>22282</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>08-10-2024</td>
                  <td>Loan Limit</td>
                  <td>100</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>08-10-2024</td>
                  <td>Limit Limit</td>
                  <td>0</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td colSpan="2">Total Loan</td>
                  <td>-85077</td>
                </tr>
              </tbody>
            </table>
            <div className="uk-overflow-container">
              <table
                className="uk-table uk-table-striped uk-table-hover uk-table-nowrap uk-table-align-vertical"
                border="1"
              >
                <thead style={{ background: "cadetblue", color: "#fff" }}>
                  <tr>
                    <th style={{ color: "#fff", width: "28px" }}>Sn.</th>
                    <th style={{ color: "#fff", width: "50px" }}>Date</th>
                    <th style={{ color: "#fff" }}>Description</th>
                    <th style={{ color: "#fff" }}>Debit</th>
                    <th style={{ color: "#fff" }}>Credit</th>
                    <th style={{ color: "#fff" }}>Balance</th>
                  </tr>
                </thead>
                <tbody style={{ color: "black" }}>
                  <tr>
                    <td>5</td>
                    <td>05-10-2024</td>
                    <td>Result</td>
                    <td style={{ color: "red" }}>0</td>
                    <td style={{ color: "green" }}>2160</td>
                    <td>- 85077</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>04-10-2024</td>
                    <td>Result</td>
                    <td style={{ color: "red" }}>4878</td>
                    <td style={{ color: "green" }}>0</td>
                    <td>- 82917</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>29-06-2024</td>
                    <td>Result</td>
                    <td style={{ color: "red" }}>0</td>
                    <td style={{ color: "green" }}>14355</td>
                    <td>- 87795</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>27-06-2024</td>
                    <td>Result</td>
                    <td style={{ color: "red" }}>0</td>
                    <td style={{ color: "green" }}>61830</td>
                    <td>- 73440</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>26-06-2024</td>
                    <td>Result</td>
                    <td style={{ color: "red" }}>0</td>
                    <td style={{ color: "green" }}>11610</td>
                    <td>- 11610</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .html5-elem-data-box,
          .html5-prev,
          .html5-next {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default Ledger;
