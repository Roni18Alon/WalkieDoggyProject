/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import User from "./images/kindpng_248729.png";
// import { Link } from "react-router-dom";

import Rating from "react-rating-stars-component";
import React, { useState, useEffect } from "react";
import { IoPawSharp } from "react-icons/io5";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function OwnerHistoryContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState();
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");

  //hard-coded veriabels update
  const usersList = [
    {
      id: 1,
      img: "img",
      name: "Gali Kovachev",
      rate: 5,
      price: 60,
      date: "29/05/2023 13:37",
    },
    {
      id: 2,
      img: "img",
      name: "roni Alon",
      rate: 4,
      price: 50,
      date: "28/05/2023 17:47",
    },
    {
      id: 3,
      img: "img",
      name: "sahar hazan",
      rate: 3,
      price: 10,
      date: "19/05/2023 12:34",
    },
  ];

  useEffect(() => {
    console.log("rate2:", reviewRating);
  }, [reviewRating]);

  //Modal-Rate (need to fix)
  const handleModalRate = (newRating) => {
    setReviewRating(newRating);
  };

  //get modal review by document.id

  //Modal:
  const Modal = ({ isOpen, onClose, onSend }) => {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle align="center">Rate {reviewName}</DialogTitle>
        <DialogContent>
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Rating
              id="rate"
              count={5}
              size={40}
              onChange={handleModalRate}
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
              value={reviewRating}
            />
          </div>
          <div className="form-group">
            <label>write your review here:</label>

            <br></br>
            <br></br>
            <form>
              <input
                type="text"
                name="review"
                id="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={4}
                cols={40}
              />
              {console.log(reviewText)}
            </form>
          </div>
          <br></br>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button variant="contained" onClick={onSend} endIcon={<SendIcon />}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSend = async (e) => {
    console.log("Sending...");
    // add post request- sending out reviws
    e.preventDefault();
    const user_email = "ronialon2008@gmail.com";
    const url =
      "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/rank";

    const requestData = {
      ranking_user: user_email, //need to change
      rank: reviewRating,
      ranked_user: reviewName,
      review: reviewText,
    };

    try {
      const response = await axios.post(
        `${url}?`,
        JSON.stringify(requestData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(requestData);
      console.log(response);
    } catch (error) {
      console.log("Error:", error.response);
    }

    console.log(requestData);
    setIsModalOpen(false);
  };

  const handleRateBtn = (e) => {
    setIsModalOpen(true);
    setReviewName(e.target.value);
  };
  //end of model

  //add whatsapp icon
  const handleLiveChat = () => {};

  return (
    <>
      <div
        className="col-12 col-md-9 col-md-9-profile p-4"
        style={{
          overflowY: "auto",
          position: "relative",
          overflowX: "hidden",
          height: "100vh",
          marginTop: "80px",
          backgroundColor: "#e2e8f0",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className="container bootdey">
                      <div className="panel panel-default panel-order">
                        <div className="panel-body">
                          <div className="row">
                            <div className="">
                              <img
                                src="https://bootdey.com/img/Content/user_3.jpg"
                                className="media-object img-thumbnail"
                              />
                              {/*row.img*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="">
                      <div className="row">
                        <div className="">
                          <span>
                            <strong>
                              {" "}
                              <a href="/Profile">{row.name}</a>{" "}
                              {/*add profile address */}
                            </strong>
                          </span>{" "}
                          <br />
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={{ pointerEvents: "none" }}>
                      <span className="label label-info">
                        <Rating
                          id={row.name}
                          count={5}
                          size={25}
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
                          readOnly
                          value={row.rate}
                        />
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>
                    {" "}
                    <div className="col-md-10">cost: $ {row.price}</div>
                  </TableCell>
                  <TableCell>
                    <div className="col-md-12">last spoke at: {row.date}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="col-12">
                      <Button
                        variant="contained"
                        color="success"
                        size="large"
                        id={row.name}
                        value={row.name}
                        onClick={handleRateBtn}
                      >
                        <AddReactionIcon></AddReactionIcon>
                        Rate me
                      </Button>
                      <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onSend={handleSend}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default OwnerHistoryContent;
