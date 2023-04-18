import React, { useState } from "react";
import Button from "./subComponents/Button";
import Paragraph from "./subComponents/Paragraph";

const Home = () => {
  const [buttonVisibility, setButtonVisibility] = useState(true);
  const [textVisibility, setTextVisibility] = useState(false);
  const handleButton = () => {
    setButtonVisibility(false);
    setTextVisibility(true);
  };
  const handleText = () => {
    setButtonVisibility(true);
    setTextVisibility(false);
  };
  return (
    <div>
      {buttonVisibility && (
        <Button buttonText="Click me" handleButton={handleButton} />
      )}
      {textVisibility && (
        <Paragraph text="You just clicked me" handleText={handleText} />
      )}
    </div>
  );
};

export default Home;
