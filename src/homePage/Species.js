import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// import images
import elephantBg from "../assets/images/elephant.png";
import bearBg from "../assets/images/bear.png";
import rhinoBg from "../assets/images/rhino.png";
import panBg from "../assets/images/pangolin.png";
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
      case "Bears":
        return bearBg;
      case "Rhinos":
        return rhinoBg;
      case "Pangolins":
        return panBg;
    }
  }

  function cutString(string, length) {
    return string.slice(0, length) + "...";
  }

  return (
    <div
      className="split split-species"
      style={{
        backgroundImage: `url(${getBgImage(props.speciesInfo.name)})`,
      }}
    >
      <Link
        to={{
          pathname: `/article/${props.speciesInfo.id}`,
          speciesId: props.speciesInfo.id,
          hash: "#top",
        }}
      >
        <div>
          <h2>{props.speciesInfo.name}</h2>
          <p className="split-description">
            {cutString(props.speciesInfo.description, 75)}
          </p>
          <div className="small-info">
            <div className="number-left">
              <p className="small-b-number">{props.speciesInfo.numberLeft}</p>
              <p className="red-label">Number left</p>
            </div>
            <div className="line"></div>
            <div className="deaths">
              <p className="small-b-number">{props.speciesInfo.deaths}</p>
              <p className="red-label">Deaths from IAT</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
