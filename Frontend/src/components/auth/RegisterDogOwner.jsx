import { useState } from "react";
import Modal from "react-modal";
import ReportIcon from "@mui/icons-material/Report";
import signup from "./dist/images/sign_up.png";
import axios from "axios";
import GoogleAutocomplete from "react-google-autocomplete";
import { async } from "q";
import styles from "./dist/Register.module.css";
import PlacesAutocomplete from "react-places-autocomplete";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const openModal = (text, closeText) => {
    setModalText(text);
    setModalCloseText(closeText);
    setIsModalOpen(true);
  };

  const reportModal = (message) => {
    setModalText(message);
    setIsModalOpen(true);
  };

  const handleAddressSelect = (address) => {
    setAddress(address);
  };

  const handleSubmit = async (event) => {
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
      reportModal("Please fill in all the required fields.");
    } else {
      await postData();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    const url =
      "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register"; // Replace with your actual API endpoint URL

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
      user_image: picture, // The base64 encoded picture
    };

    console.log(picture);
    await sendRequest(requestData, url);
  };

  const sendRequest = async (requestData, url) => {
    const userRole = "owner";
    const params = new URLSearchParams({ user_role: userRole });

    try {
      const res = await axios.post(
        `${url}?${params}`,
        JSON.stringify(requestData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        navigate("/LoginDogOwner"); // replace with your login page route
      } else {
        reportModal("Error: Invalid response from server.");
      }
    } catch (error) {
      reportModal(`Error: ${error.message}`);
    }
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
          <div className={styles.container}>
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
                    <PlacesAutocomplete
                      value={address}
                      onChange={setAddress}
                      onSelect={handleAddressSelect}
                      apiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your actual API key
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder: "Address",
                              required: true,
                              className: "form-control",
                            })}
                          />
                          <div className="suggestions">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => (
                              <div
                                {...getSuggestionItemProps(suggestion)}
                                key={suggestion.placeId}
                              >
                                {suggestion.description}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
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
                    <label htmlFor="picture" className={styles.pictureLabel}>
                      <PhotoCameraIcon style={{ fontSize: "1rem" }} />
                    </label>
                    <input
                      type="file"
                      name="picture"
                      id="picture"
                      accept="image/*"
                      onChange={handlePictureChange}
                      className={styles.pictureInput}
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
                      defaultValue="Register"
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

export default RegisterDogOwner;
