import React, { useState } from "react";
import List from "./subComponents/List";
import ListDetails from "./subComponents/ListDetails";

const ListGroup = () => {
  //Usestate to display the list
  const [showList, setShowList] = useState(true);

  //Usestate to display the details of the specific list
  const [showListDetails, setShowListDetails] = useState(false);

  //UseState to select the item clicked by the user
  const [selectedItem, setSelectedItem] = useState({});

  //Array of objects of players
  const players = [
    {
      id: "1",
      name: "L. Martinez",
      details:
        "Lisandro Martínez is an Argentine professional footballer who plays primarily as a centre-back for Premier League club Manchester United and the Argentina national team. He is widely regarded as one of the best defenders in the world.",
      imageUrl: "https://wallpaperaccess.com/full/8500118.jpg",
    },
    {
      id: "2",
      name: "D. De Gea",
      details:
        "David de Gea Quintana is a Spanish professional footballer who plays as a goalkeeper for Premier League club Manchester United and the Spain national team. He is widely regarded as one of the best goalkeepers in the world.",
      imageUrl: "https://wallpapercave.com/wp/wp1817819.jpg",
    },
    {
      id: "3",
      name: "B. Fernandes",
      details:
        "Bruno Miguel Borges Fernandes is a Portuguese professional footballer who plays as an attacking midfielder for Premier League club Manchester United and the Portugal national team. He is known for his goalscoring, playmaking, penalty taking, and work rate",
      imageUrl:
        "https://w0.peakpx.com/wallpaper/784/231/HD-wallpaper-bruno-fernandes-manchester-united-united-red-devils-man-united.jpg",
    },
    {
      id: "4",
      name: "R. Varane",
      details:
        "Raphaël Xavier Varane is a French professional footballer who plays as a centre-back for Premier League club Manchester United. Considered as one of the best defenders of his generation, Varane is known for his defensive prowess and speed",
      imageUrl:
        "https://w0.peakpx.com/wallpaper/335/746/HD-wallpaper-raphael-varane-red-soccer-manchester-united-football-french.jpg",
    },
  ];

  //handle item function to display the details of a specific user with the help of the index of the players
  const handleItem = (index) => {
    setSelectedItem(players[index]);
    setShowList(false);
    setShowListDetails(true);
  };

  //handle back function to navigate back to the list from the details
  const handleBack = () => {
    setShowList(true);
    setShowListDetails(false);
  };

  return (
    <>
      {showList && (
        <List heading="Players" listItem={players} handleItem={handleItem} />
      )}
      {showListDetails && (
        <ListDetails
          heading="Player Details"
          listItem={players}
          selectedItem={selectedItem}
          handleBack={handleBack}
        />
      )}
    </>
  );
};

export default ListGroup;
