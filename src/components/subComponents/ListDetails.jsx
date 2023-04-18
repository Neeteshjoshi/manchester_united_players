import React from "react";

const ListDetails = ({ heading, selectedItem, handleBack }) => {
  return (
    <>
      <button className="btn btn-dark mx-2" onClick={handleBack}>
        Back
      </button>
      <span className="fs-2 fw-bold my-5" style={{ marginLeft: "500px" }}>
        {heading}
      </span>

      {selectedItem && (
        <div>
          <img
            className="my-2 w-50 h-50 rounded mx-auto d-block"
            src={selectedItem.imageUrl}
            alt=""
          />
          <p
            className="text-center fs-4 my-2"
            style={{ fontFamily: "Poppins" }}
          >
            {selectedItem.details}
          </p>
        </div>
      )}
    </>
  );
};

export default ListDetails;
