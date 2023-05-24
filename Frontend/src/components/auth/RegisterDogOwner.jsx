import React,{ useState } from "react";
import "./dist/Register.css";
import styles from "./dist/Register.module.css";
import signup from "./dist/images/sign_up.png";
import { Link } from "react-router-dom";
import axios from "axios";



const Register = () => {
   // State to store the user parameters
<<<<<<< HEAD
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
form.addEventListener('submit', (event) => {
  event.preventDefault();

 

  // Perform further actions with the captured input values
  // ...
});
/*
    const data = {
      user_user_email: 'gb@example.com',
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
    const userRole = 'owner'; // Replace with the desired user role
  
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
  // close func
  

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
=======
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
>>>>>>> origin
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
<<<<<<< HEAD
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
=======
                  onSubmit={handleSubmit}
                >
>>>>>>> origin
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="name"
<<<<<<< HEAD
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
=======
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
>>>>>>> origin
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
<<<<<<< HEAD
                   
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
=======
                      onChange={handleInputChange}
>>>>>>> origin
                    />
                  </div>

                  <div className="form-group">
<<<<<<< HEAD
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
=======
>>>>>>> origin
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
<<<<<<< HEAD
                        onClick={postData}
=======
>>>>>>> origin
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
