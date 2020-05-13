import React from "react";
// import images
import elephantBg from "../assets/images/elephant.png";
import bearBg from "../assets/images/bear.png";
import "./Species.scss";

// const Species = [
//   {
//     name: "Elephants",
//     backgroundImg: "elephant.png",
//     description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
//     numberLeft: 58,
//     deaths: 63,
//   },
// ];

export default function Species(props) {
  console.log(props);

  function getBgImage(speciesName) {
    switch (speciesName) {
      case "Elephants":
        return elephantBg;
    }
  }

  return (
    <div
      className="split split-species"
      style={{
        backgroundImage: `url(${getBgImage(props.speciesInfo.name)})`,
      }}
    >
      <div>
        <h2>{props.speciesInfo.name}</h2>
        <p className="split-description">
          Lorem ipsum dolor sit amet, ipsum dolor sit amet.
        </p>
        <div className="small-info">
          <div className="number-left">
            <p className="small-b-number">58</p>
            <p className="red-label">Number left</p>
          </div>
          <div className="line"></div>
          <div className="deaths">
            <p className="small-b-number">63</p>
            <p className="red-label">Deaths from IAT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
