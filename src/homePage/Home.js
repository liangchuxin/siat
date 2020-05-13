import React from "react";
// components
import Species from "./Species";
// assets
import "./Home.scss";

const species = [
  {
    name: "Elephants",
    backgroundImg: "elephant.png",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    name: "Elephants",
    backgroundImg: "elephant.png",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    name: "Elephants",
    backgroundImg: "elephant.png",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    name: "Elephants",
    backgroundImg: "elephant.png",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
];

export default function Home() {
  return (
    <>
      <div className="tiger">
        <div className="cover-species-container">
          <div>
            <h1>Tigers</h1>
            <p className="text-regular species-description">
              Lorem ipsum dolor sit amet, tritani efficiantur sit cu, dicunt
              theophrastus eam ne, quot deleniti reformidans ut mei. Iudico
              impetus quot deleniti reformidans ut mei.
            </p>
            <button className="readmore button-text">Read more —</button>
          </div>
          <div>
            <div className="info">
              <p className="b-number">58</p>
              <p className="red-label">Numbers left</p>
            </div>
            <div className="info">
              <p className="b-number">63</p>
              <p className="red-label">Deaths from IAT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="left-right">
        <Species key={species[0].name} speciesInfo={species[0]} />
        <div className="split right bear">
          <div>
            <h2>Bears</h2>
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
      </div>
      <div className="artwork">
        <div>
          <h2 className="artwork-title">Artwork by Jessica and Elyse</h2>
          <p className="artwork-description">
            Perhaps oil painting on cardboard(s)
          </p>
        </div>
      </div>
      <div className="left-right">
        <div className="split left rhino">
          <div>
            <h2>Rhinos</h2>
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
        <div className="split right pangolin">
          <div>
            <h2>Pangolins</h2>
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
      </div>
    </>
  );
}
