import React, { useState } from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signin from "./dist/images/sign_in.png";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../authApi";
import Modal from "react-modal";

Modal.setAppElement("#root");

const LoginDogWalker = () => {
  const [modalText, setModalText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const loginMutation = useLoginMutation(
    (response) => {
      navigate("/WalkerProfile");
    },
    (error) => {
      if (error.message === "Error: User not exists or password invalid") {
        reportModal("User does not exist or the password is invalid");
      } else {
        reportModal(error.message);
      }
    }
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      reportModal("Please fill in all the required fields.");
    } else {
      loginMutation.mutate({ user_email: email, password });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const reportModal = (message) => {
    setModalText(message);
    setIsModalOpen(true);
  };

  return (
    <div className="wrapper">
      <div className="main">
        <section className="sign-in">
          <div className={styles.container}>
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
                <form onSubmit={handleSubmit} className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="your_name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="email"
                      name="your_name"
                      id="your_name"
                      placeholder="Your Email"
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
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      defaultValue="Log in"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
          overlayClassName="Overlay"
        >
          <div className="w-full max-w-md p-8 bg-white rounded">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Error</h2>
            <p className="mb-6 text-gray-600">{modalText}</p>
            <button 
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-400 focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default LoginDogWalker;
