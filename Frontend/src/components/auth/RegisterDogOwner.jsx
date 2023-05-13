import React, { useState } from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signup from "./dist/images/sign_up.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [gender, setGender] = useState();
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const years = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
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
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Country">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="Country"
                      id="Country"
                      placeholder="Country"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="City">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="City"
                      id="City"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ZipCode">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="ZipCode"
                      id="ZipCode"
                      placeholder="Zip code"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="petName1">
                      <i className="zmdi zmdi-favorite" />
                    </label>
                    <input
                      type="text"
                      name="petName"
                      id="petName"
                      placeholder="Pet's name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="petAge1">
                      <i className="zmdi zmdi-favorite" />
                    </label>
                    <input
                      type="text"
                      name="petAge"
                      id="petAge"
                      placeholder="Pet's age"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="petBreed1">
                      <i className="zmdi zmdi-favorite" />
                    </label>
                    <input
                      type="text"
                      name="petBreed"
                      id="petBreed"
                      placeholder="Pet's breed"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="petWieght1">
                      <i className="zmdi zmdi-favorite" />
                    </label>
                    <input
                      type="text"
                      name="petWieght"
                      id="petWieght"
                      placeholder="Pet's wieght in kg"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="radio"
                      value="Male"
                      name="petGender"
                      id="petGender"
                      className="petGender"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                    <input
                      type="radio"
                      value="Female"
                      name="petGender"
                      id="petGender"
                      className="petGender"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                  </div>

                  <div className="form-group">
                    <input name="birthday" id="birthday" />
                    <label>Pet's Birthday</label>
                    <select name="Day">
                      <option value="Day"> Day</option>
                      {days.map((item) => (
                        <option>{item}</option>
                      ))}
                    </select>
                    <select name="Month">
                      <option value="Month"> Month</option>
                      {months.map((item) => (
                        <option>{item}</option>
                      ))}
                    </select>
                    <select name="Year">
                      <option value="Year"> Year</option>
                      {years.map((item) => (
                        <option>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="freeText1">
                      <i className="zmdi zmdi-favorite" />
                    </label>
                    <input
                      className="form-control me-auto"
                      type="text"
                      placeholder="A little bit about my pet"
                      aria-label="A little bit about my pet"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="spayed"
                      id="spayed"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      Spayed
                      {/* <a href="#" className="term-service">
                       
                      </a> */}
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="Rabies-vaccinated"
                      id="Rabies-vaccinated"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      Rabies vaccinated
                      {/* <a href="#" className="term-service">
                       
                      </a> */}
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="Human-friendly"
                      id="Human-friendly"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      Human friendly
                      {/* <a href="#" className="term-service">
                       
                      </a> */}
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="Dog-friendly"
                      id="Dog-friendly"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      Dog friendly
                      {/* <a href="#" className="term-service">
                       
                      </a> */}
                    </label>
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
