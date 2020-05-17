import React from "react";
// components
import Species from "./Species";
import FullWidthSpecies from "./FullWidthSpecies";
// assets
import "./Home.scss";
// data
import { species } from "../App";

export default function Home() {
  return (
    <>
      <FullWidthSpecies
        key={species[4].name}
        speciesInfo={species[4]}
        readMore={true}
      />

      <div className="left-right">
        <Species key={species[0].name} speciesInfo={species[0]} />
        <Species key={species[1].name} speciesInfo={species[1]} />
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
        <Species key={species[2].name} speciesInfo={species[2]} />
        <Species key={species[3].name} speciesInfo={species[3]} />
      </div>
    </>
  );
}
