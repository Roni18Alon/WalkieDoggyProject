import React, { useState } from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signin from "./dist/images/sign_in.png";
import { Link } from "react-router-dom";
import { useLoginMutation } from './../api';
import { useNavigate } from "react-router-dom";


const LoginDogOwner = () => {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_email = document.getElementById("user_email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await loginMutation.mutateAsync({ user_email, password });
      console.log(response); // Access the response body
      setResponseData(response);

      if (loginMutation.status === "success") {
      
        console.log(response);
        console.log(response);
        console.log(response);
        console.log(response);
        // Route to the profile page
        navigate("/Profile?data=" + JSON.stringify(responseData));
      }
    } catch (error) {
      console.log(error);
    }
  };

// const postData = async () => {

  

//   // const url = 'https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/login';
//   // const form = document.getElementById('login-form');
//   // const user_email = document.getElementById('user_email').value;
//   // const password = document.getElementById('password').value;
 

//   // form.addEventListener('submit', (event) => {
//   //   event.preventDefault();
//   //   // Perform further actions with the captured input values
//   //   // ...
//   // });

//   // axios.get(url, {
//   //   params: {"user_mail": user_email},
//   //   headers: {
//   //     "password": password
//   //   },
//   // })
//   //   .then((res) => console.log(res))
//   //   .catch((error) => {
//   //     console.log("Error:", error);
//   //   });
// }
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
                  <button className="signup-image-link button-54" onClick={() => { window.location.href = "/RegisterDogOwner"; }}>
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
                          onClick={handleSubmit}
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
