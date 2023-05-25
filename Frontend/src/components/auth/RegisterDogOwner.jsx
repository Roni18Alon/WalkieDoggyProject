// import React,{ useState } from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signup from "./dist/images/sign_up.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    
   // State to store the user parameters
   const postData = async () => {

    const url = 'https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register'; // Replace with your actual API endpoint URL
    const form = document.getElementById('register-form');
    const user_name = document.getElementById('user_name').value;
    const user_last_name = document.getElementById('user_last_name').value;
    const user_email = document.getElementById('user_email').value;
    const password = document.getElementById('pass').value;
    const phone_number = document.getElementById('phone_number').value;
    const country = document.getElementById('Country').value;
    const city = document.getElementById('City').value;
    const zip = document.getElementById('zip').value;
    const address = document.getElementById('Address').value;


    // Use the captured input values as needed
    const requestData = {
      user_email: user_email,
      address: address,
      city: city,
      country: country,
      password: password,
      phone_number: phone_number,
      user_last_name: user_last_name,  
      user_name: user_name,     
      zip: zip
    };

    const userRole = 'owner'; 
    const params = new URLSearchParams({ user_role: userRole });

    form.addEventListener('submit', (event) => {
    event.preventDefault();
  // Perform further actions with the captured input values
  // ...
});
axios
          .post(`${url}?${params}`, JSON.stringify(requestData), {
            headers: {
              "Content-Type": "application/json",
            },
          })
         .then((res) => console.log(res))
         .catch((error) => {
           console.log("Error:", error);
         });

// axios({
//   method: 'POST',
//   url: `${url}?${params}`,
//   mode: 'no-cors',
//   // headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify(requestData)
// })
}

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
                  {/* User name */}
                  <div className="form-group">
                    <label htmlFor="user_name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      placeholder="User name"
                      required
                      
                    />
                  </div>
                   {/* Last name */}
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="user_last_name"
                      placeholder="Your last name"
                      required
                      
                    />
                  </div>
                   {/* user_email */}
                  <div className="form-group">
                    <label htmlFor="user_email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      type="user_email"
                      name="user_email"
                      id="user_email"
                      placeholder="Your Email"
                      required
                     
                    />
                  </div>
                   {/* password */}
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
                    {/* Address */}
                  <div className="form-group">
                    <label htmlFor="Address">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="Address"
                      id="Address"
                      placeholder="Address"
                      required
                    
                    />
                  </div>
                   {/* phone number*/}
                  <div className="form-group">
                    <label htmlFor="phone_number">
                      <i className="zmdi zmdi-phone" />
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Phone number"
                      required
                  
                    />
                  </div>
                   {/* country */}
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
                   {/* City */}
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
                   {/* Zip*/}
                  <div className="form-group">
                    <label htmlFor="zip">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      placeholder="Zip code"
                      required
                 
                    />
                  </div>
                  {/*
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
                       
                      </a> }
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
                       
                      </a> }
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
                       
                      </a> 
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
                       
                      </a> 
                    </label>
                  </div>
                */}
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
                        onClick={postData}
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
