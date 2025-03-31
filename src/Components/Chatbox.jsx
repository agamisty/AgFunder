import React, { useState, useEffect, useRef } from "react";
import { sendMessageToGroq } from "./ai";
import "../Styles/Chatbox.css";
//import "../Styles/ChatboxStyles.css";
import {BsTelegram} from 'react-icons/bs'

const Chatbot = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatWindowRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botReply = await sendMessageToGroq(input);
    setMessages((prevMessages) => [...prevMessages, userMessage, { role: "bot", content: botReply }]);
    setInput("");
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container full-screen">
      {!chatStarted ? (
        <div className="welcome-screen">
          <h1 className="welcome-title">Welcome To AgChat Bot</h1>
          <div className="welcome-image">
            <img src='/src/images/ai.png'/>
          </div>
          <h2 className="capabilities-title">Capabilities</h2>
          <div className="capabilityy">
          <div className="capability">Answer all your questions<br />just ask me anything you want to know about Agfunder</div>
          <div className="capability">Generate all text you want<br />be it articles or reports and many more</div>
          <div className="capability">Conversational AI<br />I can talk to you like a human being</div>
          </div>
          <p className="info-text">These are some few things I can do</p>
          <button className="start-chat-button" onClick={() => setChatStarted(true)}>Start chat</button>
        </div>
      ) : (
        <>
          <h2 className="chat-title">Chat</h2>
          <span className="chat-status">Online</span>
          <div className="chat-window" ref={chatWindowRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.role === "user" ? "user" : "bot"}`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message........."
              className="chat-input"
            />
            <button onClick={handleSend} className="send-button"><BsTelegram/></button>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
