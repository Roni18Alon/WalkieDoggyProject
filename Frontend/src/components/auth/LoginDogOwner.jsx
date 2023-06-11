import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../authApi";
import { useGetUserInfoQuery } from "../tokenApi";
import signin from "./dist/images/sign_in.png";
import ReportIcon from "@mui/icons-material/Report";

const LoginDogOwner = () => {
  const [modalText, setModalText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCloseText, setModalCloseText] = useState("");
  const [modalIcon, setModalIcon] = useState("</ReportIcon>");
  const navigate = useNavigate();
  const loginMutation = useLoginMutation((response) => {
    // Route to the profile page
    navigate("/Profile");
  });
  const checkData = useGetUserInfoQuery();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      // Show error dialog if any parameter is empty
      setModalText("Please fill in all the required fields.");
      setIsModalOpen(true);
      setModalCloseText("Close");
      setModalIcon(<ReportIcon />);
    } else {
      loginMutation.mutate({ user_email: email, password });
      console.log("this is email: " + email);
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
        {/* Sign in  Form */}
        <section className="sign-in">
          <div className="container">
            <div className="inner">
              <div className="signin-content">
                <div className="signin-image">
                  <figure>
                    <img
                      src={signin}
                      className="signin-img"
                      alt="sign in image"
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
                  <form
                    method="POST"
                    className="register-form"
                    id="login-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="user_email">
                        <i className="zmdi zmdi-account material-icons-name" />
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">
                        <i className="zmdi zmdi-lock" />
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
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
                      <input
                        type="submit"
                        name="signin"
                        id="signin"
                        className="form-submit"
                        value="Log in"
                      />
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

export default LoginDogOwner;
