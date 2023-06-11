import { useState } from "react";
import Modal from "react-modal";
import ReportIcon from "@mui/icons-material/Report";
import signup from "./dist/images/sign_up.png";
import axios from "axios";
import GoogleAutocomplete from "react-google-autocomplete";

Modal.setAppElement("#root");

const RegisterDogOwner = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [modalText, setModalText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCloseText, setModalCloseText] = useState("");
  const [modalIcon, setModalIcon] = useState(<ReportIcon />);
  const [picture, setPicture] = useState(null);

  const openModal = (text, closeText) => {
    setModalText(text);
    setModalCloseText(closeText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !userName ||
      !userEmail ||
      !userLastName ||
      !password ||
      !address ||
      !zip ||
      !city ||
      !phone
    ) {
      openModal("Please fill in all the required fields.", "Close");
    } else {
      postData();
    }
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      setPicture(base64String); // Store the base64 encoded picture
    };
    reader.onerror = (error) => console.log("Error: ", error);
    reader.readAsDataURL(file);
  };

  const postData = async () => {
    const url = "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register";

    const requestData = {
      user_email: userEmail,
      address: address,
      city: city,
      country: country,
      password: password,
      phone_number: phone,
      user_last_name: userLastName,
      user_name: userName,
      zip: zip,
      user_image: picture,
    };

    if (picture) {
      const reader = new FileReader();

      reader.onloadend = () => {
        requestData.picture = reader.result;
        sendRequest(requestData, url);
      };

      reader.readAsDataURL(picture);
    } else {
      sendRequest(requestData, url);
    }
  };

  const sendRequest = (requestData, url) => {
    const userRole = "owner";
    const params = new URLSearchParams({ user_role: userRole });

    axios
      .post(`${url}?${params}`, JSON.stringify(requestData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        } else {
          openModal("Error: Invalid response from server.", "Close");
        }
      })
      .catch((error) => {
        openModal(`Error: ${error.message}`, "Close");
      });
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    let formattedValue = inputValue.replace(/[^0-9]/g, "");

    if (formattedValue.length > 10) {
      formattedValue = formattedValue.slice(0, 10);
    }

    if (formattedValue.length > 3) {
      formattedValue = formattedValue.replace(/^(\d{3})(\d{0,7})/, "$1-$2");
    }

    setPhone(formattedValue);
  };

  return (
    <div className="wrapper">
      <div className="main">
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign Up as a Dog Owner</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                  onSubmit={handleSubmit}
                >
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
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
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
                      value={userLastName}
                      onChange={(e) => setUserLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      placeholder="Your Email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Address">
                      <i className="zmdi zmdi-home" />
                    </label>
                    <GoogleAutocomplete
                      apiKey="YOUR_GOOGLE_MAPS_API_KEY"
                      selectProps={{
                        value: address,
                        onChange: setAddress,
                        placeholder: "Address",
                        required: true,
                      }}
                    />
                  </div>
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
                      value={phone}
                      onChange={handlePhoneChange}
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
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
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
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
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
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="picture">Upload Picture</label>
                    <input
                      type="file"
                      name="picture"
                      id="picture"
                      accept="image/*"
                      onChange={handlePictureChange}
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
                      I agree to all statements in the Terms of Service
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={signup} alt="sign up image" />
                </figure>
                <button
                  className="signup-image-link button-54"
                  onClick={() => {
                    window.location.href = "/LoginDogOwner";
                  }}
                >
                  I am already a member
                </button>
              </div>
            </div>
          </div>
        </section>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Error</h2>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              {modalIcon}
              <p>{modalText}</p>
            </div>
            <div className="modal-footer">
              <button className="modal-close-btn" onClick={closeModal}>
                {modalCloseText}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default RegisterDogOwner;
