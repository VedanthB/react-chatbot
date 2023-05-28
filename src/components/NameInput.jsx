import React, { useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const NameInput = (props) => {
  const [name, setName] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const botMessage = createChatBotMessage(name);

      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));

      props.actionProvider.handleEnterAge();
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default NameInput;
