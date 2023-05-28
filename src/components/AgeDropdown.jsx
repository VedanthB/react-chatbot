import React, { useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

function AgeDropdown(props) {
  const [selectedAge, setSelectedAge] = useState("");

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);

    const botMessage = createChatBotMessage(event.target.value);

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const ageOptions = [];

  for (let age = 1; age <= 100; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }

  return (
    <div>
      <label htmlFor="age">Select Age:</label>
      <select id="age" value={selectedAge} onChange={handleAgeChange}>
        <option value="">Select an age</option>
        {ageOptions}
      </select>
      {selectedAge && <p>Selected Age: {selectedAge}</p>}
    </div>
  );
}

export default AgeDropdown;
