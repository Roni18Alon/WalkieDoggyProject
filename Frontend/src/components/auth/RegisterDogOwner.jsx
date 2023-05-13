import React,{ useState } from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signup from "./dist/images/sign_up.png";
import { Link } from "react-router-dom";
import axios from "axios";



const Register = () => {
   // State to store the user parameters
   const [userParams, setUserParams] = useState({ name: '', email: '', password: '', phone_number: '', country: '', city: '', zipCode: ''  });

   // Function to handle form submission
   const handleSubmit = (e) => {
    axios.post("/register", userParams, { headers: { 'Content-Type': 'application/json'}})
    .then(resp=> console.log(resp.data))
   };
 
   // Function to handle input changes
   const handleInputChange = (e) => {
     setUserParams({ ...userParams, [e.target.name]: e.target.value });
     console.log(userParams)
   };
  return (
    <div className="wrapper">
      <div className="main">
        {/* Sign up form */}
        <section className="signup">
          <div className={styles.container}>
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">
                      <i className="zmdi zmdi-phone" />
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      I agree all statements in Terms of service
                      {/* <a href="#" className="term-service">
                       
                      </a> */}
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <Link to="/Profile">
                      <input
                        type="submit"
                        name="signup"
                        id="signup"
                        className="form-submit"
                        defaultValue="Register"
                      />
                    </Link>
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={signup} alt="sing up image" />
                </figure>
                <a href="/LoginDogOwner" className="signup-image-link">
                  I am already member
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Sing in  Form */}
      </div>
    </div>
  );
};  

export default Register;
