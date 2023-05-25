import React from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signin from "./dist/images/sign_in.png";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";

const LoginDogOwner = () => {
//   const postData = async () => {
//     const url = 'https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/login'; // Replace with your actual API endpoint URL
//     const form = document.getElementById('login-form');

//     const user_email = document.getElementById('user_email').value;
//     const password = document.getElementById('password').value;

//     // Use the captured input values as needed
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

 

//   // Perform further actions with the captured input values
//   // ...
// });
// const params = {user_mail: user_email};

// const headers = {
//   'password': password,
//   'Content-Type': 'application/json',  
// };
  
//       // Create query string parameters
//       // const params = new URLSearchParams({ user_email: user_email });
//       const requestOptions = {
//         method: 'POST',
//         headers: headers,
//       };
      
//     try {
//       const response = await fetch(`${url}?${new URLSearchParams(params)}`, requestOptions);
//       console.log("-----------------------"+requestOptions.headers)
//       console.log(response.status + " SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//       if(response.status == '400') { 
//         alert('Bad Request: Please check your request data.');
//       }
//       if (response.ok) {
//         // POST request was successful
//         console.log('Request sent successfully!' + response.status);
//         // Do something with the response if needed
//       }
//       else {
//         prompt('Error:', response.error);
//       }
//     } catch (error) {
//       console.log('Error:', error.message);
      
//     }
//   };
const postData = async () => {

  const url = 'https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/login'; // Replace with your actual API endpoint URL
  const form = document.getElementById('login-form');

  const user_email = document.getElementById('user_email').value;
  const password = document.getElementById('password').value;

  // Use the captured input values as needed
  // const requestData = {
  //   user_email: user_email,
  //   address: address,
  //   city: city,
  //   country: country,
  //   password: password,
  //   phone_number: phone_number,
  //   user_last_name: user_last_name,  
  //   user_name: user_name,     
  //   zip: zip
  // };

  const params = new URLSearchParams({ user_email: user_email });

  form.addEventListener('submit', (event) => {
  event.preventDefault();
// Perform further actions with the captured input values
// ...
});
axios
        .post(`${url}?${params}`, 'none', {
          headers: {
            "Password": password,
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
                  <Link to="/RegisterDogOwner" className="signup-image-link">
                    Create an account
                  </Link>
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
                        id="user_email"
                        placeholder="User name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="your_pass">
                        <i className="zmdi zmdi-lock" />
                      </label>
                      <input
                        type="password"
                        name="your_pass"
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
                      <label htmlFor="remember-me" className="label-agree-term">
                        <span>
                          <span />
                        </span>
                        Remember me
                      </label>
                    </div>
                    <div className="form-group form-button">
                      <Link to="/Profile">
                        <input
                          type="submit"
                          name="signin"
                          id="signin"
                          className="form-submit"
                          defaultValue="Log in"
                          onClick={postData}
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

export default LoginDogOwner;
