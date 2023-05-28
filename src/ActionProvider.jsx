import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGotIt = () => {
    const botMessage = createChatBotMessage("Got it!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    handleEnterName();
  };

  const handleEnterName = () => {
    const botMessage = createChatBotMessage("Enter Your Name", {
      delay: 300,
      widget: "nameInput",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEnterAge = () => {
    const botMessage = createChatBotMessage("Enter Your Age", {
      delay: 300,
      widget: "ageDropdown",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleGotIt, handleEnterName, handleEnterAge },
        });
      })}
    </div>
  );
};

export default ActionProvider;
