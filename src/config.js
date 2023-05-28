import { createChatBotMessage } from "react-chatbot-kit";

import GotItButton from "./components/GotItButton";
import NameInput from "./components/NameInput";
import AgeDropdown from "./components/AgeDropdown";

const config = {
  initialMessages: [
    createChatBotMessage("hello! Welcome to Student Info system", {
      delay: 300,
      widget: "gotitbtton",
    }),
  ],
  widgets: [
    {
      widgetName: "gotitbtton",
      widgetFunc: (props) => <GotItButton {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "nameInput",
      widgetFunc: (props) => <NameInput {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "ageDropdown",
      widgetFunc: (props) => <AgeDropdown {...props} />,
      mapStateToProps: ["messages"],
    },
  ],
};

export default config;
