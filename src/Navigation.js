import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navigation.scss";

export default class Navigation extends React.Component {
  return() {}

  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    return (
      <nav className={this.state.isTop ? "up" : "down"}>
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
    );
  }
}
