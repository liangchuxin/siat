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
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: "40,000",
    deaths: "20,000",
  },
  {
    id: "bear",
    name: "Bears",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
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
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
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
          <div className="footer-icon">ICON</div>
          <div className="footer-details">
            <div>Copyright © Celia, Fairy, Elyse & Jessica</div>
            <div>Contact us: liang81077@gapps.uwcsea.edu.sg</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
