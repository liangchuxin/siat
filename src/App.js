import React from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./homePage/Home";
import Article from "./articlePage/Article";
import "./App.scss";

export const species = [
  {
    id: "elephant",
    name: "Elephants",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    id: "bear",
    name: "Bears",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    id: "rhino",
    name: "Rhinos",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    id: "pangolin",
    name: "Pangolins",
    description: "Lorem ipsum dolor sit amet, ipsum dolor sit amet.",
    numberLeft: 58,
    deaths: 63,
  },
  {
    id: "tiger",
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
          <Route
            path="/article/:speciesId"
            render={(props) => <Article {...props} />}
          />
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
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
