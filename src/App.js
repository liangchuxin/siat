import React from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./homePage/Home";
import About from "./About";
import Article from "./articlePage/Article";
import "./App.scss";

export const species = [
  {
    id: "elephant",
    name: "Elephants",
    description:
      "Elephants are being poached in large numbers for their tusks. Ivory is highly demanded in the Asian market and it is often carved into ornaments and jewellery. Even though this is banned internationally, ivory trade is highly profitable and is causing the death of 55 elephants every day on average.",
    numberLeft: "40,000",
    deaths: "20,000",
  },
  {
    id: "bear",
    name: "Bears",
    description:
      "Every year, tens of thousands of black bears are taken by hunters for use in bear bile farming. Since bear bile is known to be useful in treating liver and gall bladder conditions, it is used in some traditional medicines mostly in China, South Korea and Vietnam.",
    numberLeft: "200,000",
    deaths: "700",
  },
  {
    id: "rhino",
    name: "Rhinos",
    description:
      "Rhinos are victims of poaching due to the high demand of their horns both for decoration and the myth of its medical properties. Even though many countries has made this illegal, the high demand for Rhino horns on the black market has risen over the years and this costed countless rhinos their lives",
    numberLeft: "27,000",
    deaths: "318",
  },
  {
    id: "pangolin",
    name: "Pangolins",
    description:
      "Pangolins are covered in distinctive scales that ward off predators in the wild, but this makes them the traffickers' targets. Their scales are boiled off their bodies for use in traditional medicine, their meat is a high-end delicacy in China and their blood is seen as a healing tonic.",
    numberLeft: "N/A",
    deaths: "279,000",
  },
  {
    id: "tiger",
    name: "Tigers",
    description:
      "These territorial and generally solidarity but social predators have once ranged widely in Asia but have lost 93% of their historic range ever since the 20th Century due to the loss of habitats. These large cats’ population have dropped from 100,000 in the 20th century to 3000 in 2015.",
    numberLeft: "3,890",
    deaths: "100+",
  },
];

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route
            path="/article/:speciesId"
            render={(props) => <Article {...props} />}
          />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer className="text-light">
          <div></div>
          <div className="footer-icon">
            <img src="https://i.loli.net/2020/06/26/vDi7gSUyqXKcPom.png" />
          </div>
          <div className="footer-details">
            <div>Copyright © Celia, Fairy, Elyse & Jessica</div>
            <div>Contact us: liang81077@gapps.uwcsea.edu.sg</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
