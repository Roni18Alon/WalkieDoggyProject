import React, { useState } from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signin from "./dist/images/sign_in.png";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../authApi";
import { useGetUserInfoQuery } from "../tokenApi";
import ReportIcon from "@mui/icons-material/Report";

const LoginDogWalker = () => {
  const [modalText, setModalText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCloseText, setModalCloseText] = useState("");
  const [modalIcon, setModalIcon] = useState("</ReportIcon>");
  const navigate = useNavigate();
  const loginMutation = useLoginMutation((response) => {
    // Route to the profile page
    navigate("/Profile");
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      // Show error dialog if any parameter is empty
      setModalText("Please fill in all the required fields.");
      setIsModalOpen(true);
      setModalCloseText("Close");
      setModalIcon(<ReportIcon />);
    } else {
      loginMutation.mutate({ user_email: email, password });
      console.log("this is email: " + email);
      navigate("/WalkerProfile")
    }
  };
  return (
    <div className="wrapper">
      <div className="main">
        {/* Sing in  Form */}
        <section className="sign-in">
          <div className={styles.container}>
            <div className="inner">
              {" "}
              <div className="signin-content">
                <div className="signin-image">
                  <figure>
                    <img
                      src={signin}
                      className="signin-img"
                      alt="sing up image"
                    />
                  </figure>
                  <button
                    className="signup-image-link button-54"
                    onClick={() => {
                      window.location.href = "/RegisterDogOwner";
                    }}
                  >
                    Create an account
                  </button>
                </div>
                <div className="signin-form">
                  <h2 className="form-title">Sign in</h2>
                  <form method="POST" className="register-form" id="login-form">
                    <div className="form-group">
                      <label htmlFor="your_name">
                        <i className="zmdi zmdi-account material-icons-name" />
                      </label>
                      <input
                        type="text"
                        name="your_name"
                        id="your_name"
                        placeholder="Your Name"
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="your_pass">
                        <i className="zmdi zmdi-lock" />
                      </label>
                      <input
                        type="password"
                        name="your_pass"
                        id="your_pass"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        name="remember-me"
                        id="remember-me"
                        className="agree-term"
                      />
                      <label htmlFor="remember-me" className="label-agree-term">
                        <span>
                          <span />
                        </span>
                        Remember me
                      </label>
                    </div>
                    <div className="form-group form-button">
                      <Link to="/WalkerProfile">
                        <input
                          type="submit"
                          name="signin"
                          id="signin"
                          className="form-submit"
                          defaultValue="Log in"
                          onClick={handleFormSubmit}
                        />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginDogWalker;
