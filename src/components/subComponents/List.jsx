import React, { useState } from "react";

const List = ({ heading, listItem, handleItem }) => {
  // Use state for selecting a item that is clicked by the user
  const [selectedItem, setSelectedItem] = useState();

  return (
    <>
      <h1
        className="user-select-none text-center"
        style={{ fontFamily: "Poppins" }}
      >
        {heading}
      </h1>

      {/* Using MAP funciton to populate or display the data in the list */}
      {listItem.map((item, index) => {
        return (
          <ul
            className=" list-group w-100 my-4 text-center d-flex align-items-center"
            key={item.id}
          >
            <li
              className={
                // Ternary operator
                selectedItem === index
                  ? "list-group-item bg-dark user-select-none w-50 text-white"
                  : "list-group-item user-select-none w-50 bg-light "
              }
              style={{ fontFamily: "Poppins" }}
              onClick={() => {
                setSelectedItem(index);
                handleItem(index);
              }}
            >
              {item.name}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default List;
