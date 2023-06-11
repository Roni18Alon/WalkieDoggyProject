import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { IoPawSharp } from "react-icons/io5";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import Rating from "react-rating-stars-component";

function RateMeModal() {
  const [reviewEmail, setreviewEmail] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const RateMeModal = ({
    isOpen,
    onClose,
    onSend,
    reviewEmail,
    reviewName,
    userData,
  }) => {
    const handleRatingChange = (e) => {
      console.log(e);
      setReviewRating(e);
    };
    const handleCloseRateMeModal = (onClose) => {
      onClose();
    };
    const handleSendRateMeModal = async () => {
      console.log("Sending...");
      console.log(reviewEmail);

      const params = new URLSearchParams({
        user_mail: userData,
      });

      const urlRank =
        "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/rank";
      console.log("reviewEmail: " + reviewEmail);
      console.log("reviewRating: " + reviewRating);
      console.log("reviewText: " + reviewText);

      const requestData = {
        ranking_user: userData,
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

        console.log(requestData);
        console.log(response);
      } catch (error) {
        console.log("Error:", error.response);
      }

      console.log(requestData);
      onSend();
    };

    const handleTextChange = (e) => {
      setReviewText(e.target.value);
    };

    const handleClose = () => {
      handleCloseRateMeModal(onClose);
      setReviewText("");
      setReviewRating(0);
    };

    const handleSend = () => {
      handleSendRateMeModal(onSend);
      setReviewText("");
      setReviewRating(0);
    };

    const formattedReviewName = reviewName
      ?.split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");

    return (
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle align="center">Rate {formattedReviewName}</DialogTitle>

        <DialogContent>
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Rating
              name="review-rating"
              count={5}
              value={reviewRating}
              onChange={handleRatingChange}
              size={35}
              activeColor="#ffc107"
              filledIcon={
                <div className="custom-icon">
                  <IoPawSharp />
                </div>
              }
              emptyIcon={
                <div className="custom-icon">
                  <IoPawSharp />
                </div>
              }
            />
          </div>
          <div className="form-group">
            <DialogContentText>Write your review here:</DialogContentText>

            <br />
            <br />
            <form>
              <textarea
                className="form-control"
                id="review-text"
                value={reviewText}
                onChange={handleTextChange}
              ></textarea>
              {console.log(reviewText)}
            </form>
          </div>
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            variant="contained"
            onClick={handleSend}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  RateMeModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
    reviewEmail: PropTypes.string,
    userData: PropTypes.string,
  };
}
export default RateMeModal;
