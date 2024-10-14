import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header id="header_main" style={{ background: "#ff3f00" }}>
      <div className="header_main_content">
        <nav className="uk-navbar">
          <button
            onClick={toggleSidebar}
            id="sidebar_main_toggle"
            className="sSwitch sSwitch_left"
            style={{ background: "none", border: "none" }}
          >
            <span className="sSwitchIcon"></span>
          </button>
          <span
            style={{
              fontSize: "20px",
              color: "#ffffff",
              lineHeight: "50px",
              float: "left",
              fontWeight: "900",
            }}
          >
            C32487
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#ffffff",
              lineHeight: "50px",
              float: "right",
              fontWeight: "900",
            }}
          >
            <b>
              <span style={{ fontSize: "20px" }}>Limit: </span>
              <span id="current_limit" style={{ fontSize: "20px" }}>
                0
              </span>
            </b>
            <img
              src="/img/user.png"
              style={{ width: "47px", verticalAlign: "top" }}
              alt="User Icon"
            />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
