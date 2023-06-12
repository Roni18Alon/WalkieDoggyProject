import React, { useState } from "react";
import { IoPawSharp } from "react-icons/io5";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import Button from "@mui/material/Button";
import Rating from "react-rating-stars-component";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatModal from "../../ChatModal";
import RateMeModal from "../../RateMeModal";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useGetUserInfoQuery } from "../../tokenApi";
import useFetchUserList from "../../recentApi";
import { handleSendRateMeModal } from "../../RateMeModal";
import { useNavigate } from "react-router";

const useStyles = makeStyles({
  noHistoryMessage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
    background: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
});
function OwnerHistoryContent() {
  const navigate = useNavigate();
  const classes = useStyles();
  const { data: responseData } = useGetUserInfoQuery();
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isRateMeModalOpen, setIsRateMeModalOpen] = useState(false);

  const userEmail = responseData?.body?.user_email;
  const { userList, loading, error } = useFetchUserList(userEmail);

  const toggleChatModal = () => {
    setIsChatModalOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleCloseChatModal = () => {
    setIsChatModalOpen(false);
  };
  const handleSend = () => {
    handleSendRateMeModal(reviewRating, reviewText, reviewEmail, userEmail);
  };

  const handleCloseRateMeModal = () => {
    setIsRateMeModalOpen(false);
  };

  const handleRateBtn = (e) => {
    setIsRateMeModalOpen(true);
    setReviewName(e.target.id);
    setReviewEmail(e.target.value);
  };

  if (userList.length === 0) {
    return <div className={classes.noHistoryMessage}>No history yet..</div>;
  }
  if (loading) return "Loading...";
  if (error) return "An error occurred";

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
                                  <p>
                                    {row.user_full_name
                                      .split(" ")
                                      .map(
                                        (name) =>
                                          name.charAt(0).toUpperCase() +
                                          name.slice(1)
                                      )
                                      .join(" ")}
                                  </p>
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
                        onSend={() => handleSend}
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
                        <WhatsAppIcon
                          style={{ fontSize: 40, color: "green" }}
                        />
                      </Button>
                      <ChatModal
                        isOpen={isChatModalOpen}
                        onClose={handleCloseChatModal}
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
