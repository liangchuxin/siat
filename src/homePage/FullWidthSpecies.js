import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./FullWidthSpecies.scss";
// import images
import elephantBg from "../assets/images/elephant.png";
import bearBg from "../assets/images/bear.png";
import rhinoBg from "../assets/images/rhino.png";
import panBg from "../assets/images/pangolin.png";
import tigerBg from "../assets/images/tiger.png";

export default function FullWidthSpecies(props) {
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
      case "Tigers":
        return tigerBg;
    }
  }
  return (
    <div
      className="fullwidth-container"
      style={{ backgroundImage: `url(${getBgImage(props.speciesInfo.name)})` }}
    >
      <div className="cover-species-container">
        <div>
          <h1>{props.speciesInfo.name}</h1>
          <p className="text-regular species-description">
            {props.speciesInfo.description}
          </p>
          {props.readMore && (
            <Link
              to={{
                pathname: `/article/${props.speciesInfo.id}`,
                speciesId: props.speciesInfo.id,
                hash: "#top",
              }}
            >
              <button className="readmore button-text">Read more —</button>
            </Link>
          )}
        </div>
        <div>
          <div className="info">
            <p className="b-number">{props.speciesInfo.numberLeft}</p>
            <p className="red-label">Numbers left</p>
          </div>
          <div className="info">
            <p className="b-number">{props.speciesInfo.deaths}</p>
            <p className="red-label">Deaths from IAT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
