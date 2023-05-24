import React from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signup from "./dist/images/sign_up.png";
import { Link } from "react-router-dom";

const RegisterDogWalker = () => {
     // State to store the user parameters
     const postData = async () => {
      const url = 'https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register'; // Replace with your actual API endpoint URL
      const form = document.getElementById('register-form');
  
      const user_name = document.getElementById('user_name').value;
      const user_last_name = document.getElementById('user_last_name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('pass').value;
      const mobile = document.getElementById('mobile').value;
      const country = document.getElementById('Country').value;
      const city = document.getElementById('City').value;
      const zipCode = document.getElementById('ZipCode').value;
    
      // Use the captured input values as needed
      const requestData = {
        user_name: user_name,
        user_last_name: user_last_name,
        email: email,
        password: password,
        mobile: mobile,
        country: country,
        city: city,
        zipCode: zipCode
      };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
   
  
    // Perform further actions with the captured input values
    // ...
  });
  /*
      const data = {
        user_email: 'gb@example.com',
        address: '123 Main St',
        city: 'Holon',
        country: 'Israel',
        password: '123456',
        phone_number: '555-555-5555',
        user_last_name: 'Guy',
        user_name: 'Ben haim',
        zip: '1234567'
      };
    */
      const userRole = 'walker'; // Replace with the desired user role
    
        // Create query string parameters
    const params = new URLSearchParams({ user_role: userRole });
  
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    };
    
      try {
        const response = await fetch(`${url}?${params}`, requestOptions);
        if(response.status == '400') { 
          alert('Bad Request: Please check your request data.');
          prompt("UserAlready exists")
        }
        if (response.ok) {
          // POST request was successful
          console.log('Request sent successfully!');
          // Do something with the response if needed
        } else {
          // Handle the error
          console.log('Error:', response.error);
          prompt("UserAlready exists")
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
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
                    <label htmlFor="address">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
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
                    <Link to="/WalkerProfile">
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
                <a href="/LoginDogWalker" className="signup-image-link">
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

export default RegisterDogWalker;
