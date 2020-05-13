import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./homePage/Home";
import Article from "./articlePage/Article";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="/" className="icon">
              ICON
            </Link>
          </div>
          <div>
            <span className="nav-text">
              Species{" "}
              <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            </span>
            <span className="nav-text">Artwork</span>
            <span className="nav-text donate">Donate</span>
          </div>
        </nav>

        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <footer className="text-light">
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
