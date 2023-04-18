import React from "react";

const Paragraph = ({ text, handleText }) => {
  return (
    <div className="d-flex justify-content-around my-3">
      <p className="text-primary font-bold">{text}</p>
      <button
        className="user-select-none text-dark btn btn-danger"
        onClick={handleText}
      >
        X
      </button>
    </div>
  );
};

export default Paragraph;
