import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./homePage/Home"
import Article from "./articlePage/Article"
import "./App.scss"

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/article">Article</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <footer>
          This is a footer.
        </footer>
      </div>
    </Router>
  );
}