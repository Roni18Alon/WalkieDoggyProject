import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  messageInput: {
    flex: 1,
    marginRight: theme.spacing(1),
  },
  messageItem: {
    marginBottom: theme.spacing(1),
  },
  closeButton: {
    color: theme.palette.success.main,
  },
  sendButton: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
}));

const ChatModal = ({ isOpen, onClose, userToConnect}) => {
  const classes = useStyles();
  const [message, setMessage] = React.useState("");
  const [conversation, setConversation] = React.useState([]);

  const handleSendMessage = () => {
    const newMessage = {
      sender: "You",
      text: message,
    };

    setConversation((prevConversation) => [...prevConversation, newMessage]);
    setMessage("");
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle disableTypography>
        <Typography variant="h6" align="center">
          Chat with {userToConnect}
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.chatContainer}>
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`${classes.messageContainer} ${classes.messageItem}`}
          >
            <Typography>{message.sender}:</Typography>
            <Typography>{message.text}</Typography>
          </div>
        ))}
        <div className={classes.messageContainer}>
          <TextField
            className={classes.messageInput}
            variant="outlined"
            label="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            className={classes.sendButton}
            endIcon={<SendIcon />}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button className={classes.closeButton} onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChatModal;
