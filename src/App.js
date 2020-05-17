import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./homePage/Home";
import Article from "./articlePage/Article";
import "./App.scss";

export const species = [
  {
    name: "Elephants",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    name: "Bears",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    name: "Rhinos",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    name: "Pangolins",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    name: "Tigers",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
];

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/article/:speciesName">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <footer className="text-light">
          <div></div>
          <div className="footer-icon">ICON</div>
          <div className="footer-details">
            <div>Copyright © abcd abcdabcd</div>
            <div>Contact us: +65 8888 8888</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
