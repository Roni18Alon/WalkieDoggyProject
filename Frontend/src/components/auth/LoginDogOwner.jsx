import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useLoginMutation } from "./../api";

import signin from "./dist/images/sign_in.png";

const LoginDogOwner = () => {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user_email = document.getElementById("user_email").value;
    const password = document.getElementById("password").value;

    try {
      await loginMutation.mutateAsync({ user_email, password });

      if (loginMutation.isSuccess) {
        const response = loginMutation.data;
        console.log(response);
        localStorage.setItem("responseData", JSON.stringify(response));
        // Route to the profile page
        navigate("/Profile?data=" + JSON.stringify(response));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
        {/* Sing in  Form */}
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
                        type="text"
                        name="user_email"
                        id="user_email"
                        placeholder="User name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">
                        <i className="zmdi zmdi-lock" />
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
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
                      <label
                        htmlFor="remember-me"
                        className="label-agree-term"
                      >
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