import React from "react";

const GotItButton = (props) => {
  return <button onClick={props.actionProvider.handleGotIt}> got it </button>;
};

export default GotItButton;
