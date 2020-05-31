import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DropDown from "./DropDown";
import "./Navigation.scss";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      dropdownMenu: true,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.refresh = this.refresh.bind(this);
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

  refresh() {
    window.location.reload();
  }

  render() {
    return (
      <>
        <nav className={this.state.isTop ? "up" : "down"}>
          <div>
            <Link to="/" onClick={this.refresh} className="icon" hash="#top">
              ICON
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
            <span className="nav-text donate">Donate</span>
          </div>
        </nav>
        <DropDown open={this.state.dropdownMenu} />
      </>
    );
  }
}
