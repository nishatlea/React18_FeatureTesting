import React from "react";
import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Welcome Visitor");

  return (
    <div>
      <h1> {message} </h1>
      <button onClick={() => setMessage("Thank you for subscribing!")}>
        Subscribe
      </button>
    </div>
  );
};

export default Message;
