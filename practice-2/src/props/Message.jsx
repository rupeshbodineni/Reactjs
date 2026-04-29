import React, { useState } from "react"
const Message = () => {
  let [Msg, setMessage] = useState("Hello World");

  let updateHandler = (value) => {
    setMessage(value);
  };

  return (
    <div>
      <h1>Message Component</h1>
      <h2>Value: {Msg}</h2>

      <button onClick={updateHandler.bind(null, "Good Morning")}>GM</button>
      <button onClick={updateHandler.bind(null, "Good Afternoon")}>GA</button>
      <button onClick={updateHandler.bind(null, "Good Evening")}>GE</button>
      <button onClick={updateHandler.bind(null, "Good Night")}>GN</button>
    </div>
  );
};

export default Message;