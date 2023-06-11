import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Snackbar,
} from "@material-ui/core";
import { IoPawSharp } from "react-icons/io5";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import Rating from "react-rating-stars-component";
import { useGetUserInfoQuery } from "../components/tokenApi";
import { useNavigate } from "react-router";

import "./RateMeModal.css"; // Import custom CSS for styling

export const handleSendRateMeModal = async (
  reviewRating,
  reviewText,
  reviewEmail,
  userEmail,
  onSuccess,
  navigate
) => {
  const params = new URLSearchParams({
    user_mail: userEmail,
  });

  const urlRank =
    "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/rank";

  const requestData = {
    ranking_user: userEmail,
    rank: reviewRating,
    ranked_user: reviewEmail,
    review: reviewText,
  };

  try {
    const response = await axios.post(`${urlRank}?${params}`, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    onSuccess(); // Call the onSuccess function after successful submission
    navigate("/OwnerHistory");
  } catch (error) {
    console.log("Error:", error.response);
  }
};

const RateMeModal = ({
  isOpen,
  onClose,
  onSend,
  reviewEmail,
  reviewName,
}) => {
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const { data: responseData } = useGetUserInfoQuery(); // Get responseData from useGetUserInfoQuery

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Get the navigate function from useNavigate
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRatingChange = (e) => {
    setReviewRating(e);
  };

  const handleTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleClose = () => {
    onClose();
    setReviewText("");
    setReviewRating(0);
  };

  const handleSend = async () => {
    await handleSendRateMeModal(
      reviewRating,
      reviewText,
      reviewEmail,
      userData,
      onSend,
      navigate // Pass the navigate function as a parameter
    );
    setReviewText("");
    setReviewRating(0);
    setShowSuccessMessage(true);
    handleClose();
  };

  const handleSuccessMessageClose = () => {
    setShowSuccessMessage(false);
  };

  useEffect(() => {
    if (responseData) {
      setUserData(responseData.body);
    }
  }, [responseData]);

  const formattedReviewName = reviewName
    ?.split(" ")
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(" ");

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle align="center">Rate {formattedReviewName}</DialogTitle>

        <DialogContent>
          <div className="rating-container">
            <Rating
              name="review-rating"
              count={5}
              value={reviewRating}
              onChange={handleRatingChange}
              size={40}
              activeColor="#ffc107"
              filledIcon={<IoPawSharp />}
              emptyIcon={<IoPawSharp />}
            />
          </div>
          <div className="form-group">
            <DialogContentText className="review-label">
              Write your review here:
            </DialogContentText>

            <br />
            <br />
            <form>
              <textarea
                className="form-control review-textarea"
                id="review-text"
                value={reviewText}
                onChange={handleTextChange}
              ></textarea>
            </form>
          </div>
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="dialog-button">
            Close
          </Button>
          <Button
            variant="contained"
            onClick={handleSend}
            endIcon={<SendIcon />}
            className="dialog-button"
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={3000}
        onClose={handleSuccessMessageClose}
        message="The rate is sent successfully."
        className="success-snackbar"
      />
    </>
  );
};

RateMeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  reviewEmail: PropTypes.string,
};

export default RateMeModal;
