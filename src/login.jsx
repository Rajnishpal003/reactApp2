import React, { useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add login_page class to the body
    document.body.classList.add("login_page");

    // Cleanup the class when the component unmounts
    return () => {
      document.body.classList.remove("login_page");
    };
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/"); // Navigate to the home page
  };

  return (
    <div
      className="login_page_wrapper"
      style={{ backgroundImage: "url(/img/bg.jpg" }}
    >
      <div id="login_card">
        <div className="md-card-content large-padding" id="login_form">
          <div className="login_heading">
            <img src="/img/logo_img.png" alt="Logo" />
          </div>
          <form onSubmit={handleLogin} acceptCharset="utf-8">
            <div className="uk-form-row"></div>
            <table>
              <tbody>
                <tr>
                  <td className="form-icon">C</td>
                  <td>
                    <input
                      className="md-input"
                      required
                      type="tel"
                      id="login_username"
                      placeholder="Enter Code"
                      name="Username"
                      style={{ background: "#fff" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="form-icon">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </td>
                  <td>
                    <input
                      className="md-input"
                      required
                      type="password"
                      placeholder="Password"
                      id="login_password"
                      name="Password"
                      style={{ background: "#fff" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="form-icon">211</td>
                  <td>
                    <input
                      className="md-input"
                      required
                      type="tel"
                      placeholder="Your Answer"
                      id="login_answer"
                      name="answer"
                      style={{ background: "#fff" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="submit"
                      value="Sign In"
                      className="md-btn md-btn-primary md-btn-block md-btn-large"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
