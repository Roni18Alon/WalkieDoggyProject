import React, { useState, useEffect } from "react";
import { IoPawSharp } from "react-icons/io5";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import Button from "@mui/material/Button";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Rating from "react-rating-stars-component";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatModal from "../../ChatModal";
import RateMeModal from "../../RateMeModal";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function OwnerHistoryContent() {
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [userList, setUserList] = useState([]);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isRateMeModalOpen, setIsRateMeModalOpen] = useState(false);

  const toggleChatModal = () => {
    setIsChatModalOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleCloseChatModal = () => {
    setIsChatModalOpen(false);
  };

  const handleCloseRateMeModal = () => {
    setIsRateMeModalOpen(false);
  };

  const handleSendRateMeModal = () => {
    // Handle sending the rating
    // You can perform any necessary actions here
    setIsRateMeModalOpen(false); // Close the modal after sending
  };

  const handleRateBtn = (e) => {
    setIsRateMeModalOpen(true);
    setReviewName(e.target.id);
    setReviewEmail(e.target.value);
    console.log(e.target.value);
  };

  const params = new URLSearchParams({
    user_mail: responseData.body[0].user_email,
  });

  // get-request for recent people contact.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/recent",
          {
            params: { user_mail: responseData.body[0].user_email },
          }
        );
        const fetchedUserList = JSON.parse(JSON.stringify(response.data.body));
        setUserList(fetchedUserList);
        console.log(fetchedUserList);
      } catch (error) {
        console.log("Error:", error.response);
      }
    };

    fetchData();
  }, []);

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
          backgroundColor: "#f8f8f8",
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
              {userList.map((row) => (
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="col-md-10">
                      <div className="row">
                        <div className="">
                          <div className="row">
                            <div className="">
                              <span>
                                <strong>
                                  <a href="/WalkerProfileForUser">
                                    {row.user_full_name
                                      .split(" ")
                                      .map(
                                        (name) =>
                                          name.charAt(0).toUpperCase() +
                                          name.slice(1)
                                      )
                                      .join(" ")}
                                  </a>
                                </strong>
                              </span>{" "}
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div style={{ pointerEvents: "none" }}>
                      <span className="label label-info">
                        <Rating
                          id={row.user_full_name}
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
                          value={row.rank}
                        />
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="col-md-12">
                      last spoke at: {row.connection_time}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="col-12">
                      <RateMeModal
                        isOpen={isRateMeModalOpen}
                        onClose={handleCloseRateMeModal}
                        onSend={handleSendRateMeModal}
                        reviewName={reviewName}
                        reviewEmail={reviewEmail}
                      />
                      <Button
                        variant="contained"
                        color="success"
                        size="large"
                        id={row.user_full_name}
                        value={row.connected_user}
                        onClick={handleRateBtn}
                      >
                        <AddReactionIcon></AddReactionIcon>
                        Rate me
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Button onClick={toggleChatModal}>
                        <WhatsAppIcon style={{ fontSize: 40, color: "green" }} />
                        </Button>
                      <ChatModal
  isOpen={isChatModalOpen}
  onClose={() => setIsChatModalOpen(false)}
  userToConnect={reviewName}
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
