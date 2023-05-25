import React, { useState } from 'react';
import { FiMessageSquare, FiSend, FiX } from 'react-icons/fi'; // Import dog icons from react-icons

import './LiveChat.css'; // Import CSS styles

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`live-chat ${isOpen ? 'open' : ''}`}>
      <div className="chat-toggle" onClick={handleToggleChat}>
        <FiMessageSquare className="chat-icon" />
      </div>
      <div className="chat-container">
        <div className="chat-header">
          <h3>Live Chat</h3>
          <button className="close-button" onClick={handleToggleChat}>
            <FiX />
          </button>
        </div>
        <div className="chat-messages">
          {/* Display chat messages here */}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message" />
          <button>
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
