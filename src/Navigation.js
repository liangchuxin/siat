import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import DropDown from "./DropDown";
import "./Navigation.scss";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      dropdownMenu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.setMenuOff = this.setMenuOff.bind(this);
  }

  componentDidMount() {
    console.log("called componentDidMont");
    console.log(this.state.dropdownMenu);
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        console.log("Change isTop");
        this.setState({ isTop: isTop });
        console.log(this.state.dropdownMenu);
      }
    });
  }

  setMenuOff() {
    this.setState({ dropdownMenu: false });
  }

  toggleMenu() {
    console.log(this.state.dropdownMenu);
    if (this.state.dropdownMenu) {
      console.log("Turn off DropDown");
      this.setState({ dropdownMenu: false });
      // problem here
      console.log("dropdownMenu is: " + this.state.dropdownMenu);
    } else {
      console.log("Turn on DropDown");
      this.setState({ dropdownMenu: true });
    }
  }

  render() {
    return (
      <>
        <nav className={this.state.isTop ? "up" : "down"}>
          <div>
            <Link to="/#top" className="icon" hash="#top">
              SIAT
            </Link>
          </div>
          <div>
            <span
              onClick={this.toggleMenu}
              className="nav-text dropdown-button"
            >
              Species{" "}
              <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            </span>
            <Link to="/#art" hash="#art">
              <span className="nav-text">Artwork</span>
            </Link>
            <Link to="/about">
              <span className="nav-text">About</span>
            </Link>
            <span className="nav-text donate">Donate</span>
          </div>
        </nav>
        <DropDown
          open={this.state.dropdownMenu}
          setMenuOff={this.setMenuOff}
          setMenuOn={this.setMenuOn}
        />
      </>
    );
  }
}
