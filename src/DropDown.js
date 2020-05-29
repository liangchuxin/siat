import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./DropDown.scss";

function activate() {
  var elem = document.getElementById("menu-backdrop");
  var label = document.getElementsByClassName("species-label")[0];
  var button = document.getElementsByClassName("dropdown-button")[0];
  //   if (elem.classList.length < 1) {
  elem.style.transitionDelay = "0s";
  label.style.transitionDelay = "0s";
  elem.classList.add("active");
  label.classList.add("active");
  button.innerHTML =
    'Close <i class="fa fa-angle-double-up" aria-hidden="true"></i>';
  var num = document.getElementsByClassName("slider").length;
  for (var count = 0; count < num; count++) {
    var classname = "slider-text" + count.toString(10);
    var item = document.getElementsByClassName(classname)[0];
    item.style.marginTop = "5rem";
    item.style.animationName = "slide-up";
    item.style.animationDelay = (count * 120 + 300).toString(10) + "ms";
    // }
    //   } else {
  }
}
function close() {
  var elem = document.getElementById("menu-backdrop");
  var label = document.getElementsByClassName("species-label")[0];
  var button = document.getElementsByClassName("dropdown-button")[0];
  elem.style.transitionDelay = "0.3s";
  label.style.transitionDelay = "0.5s";
  elem.classList.remove("active");
  label.classList.remove("active");
  button.innerHTML =
    'Species <i class="fa fa-angle-double-down" aria-hidden="true"></i>';
  var num = document.getElementsByClassName("slider").length;
  for (var count = 0; count < num; count++) {
    var classname = "slider-text" + count.toString(10);
    var item = document.getElementsByClassName(classname)[0];
    item.style.marginTop = "0rem";
    item.style.animationName = "slide-down";
    item.style.animationDelay = (count * -120 + 600).toString(10) + "ms";
  }
}
//   var animate = document.getElementsByClassName("slider");
//   var num = animate.length;
//   var items = document.querySelectorAll(".slider h2");
//   for (var count = 0; count < num; count++) {
//     var classname = "slider-text" + count.toString(10);
//     items[count].classList.add(classname);

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.updateBackground = this.updateBackground.bind(this);
    this.fade = this.fade.bind(this);
  }

  componentWillReceiveProps() {
    console.log("DropDown: props.open", this.props.open);
    if (this.props.open) {
      activate();
    } else {
      close();
    }
  }

  fade() {
    var classname = document.getElementsByClassName("dropdown-main-container");
    if ("active" in classname) {
      document
        .getElementsByClassName("dropdown-main-container")[0]
        .classList.remove("active");
    } else {
      document
        .getElementsByClassName("Dropdown-main-container")[0]
        .classList.add("active");
    }
  }

  updateBackground(e) {
    let species = e.target.innerText;
    var backdrop = document.getElementById("menu-backdrop");
    if (backdrop.classList.length == 1) {
      switch (species) {
        case "Tigers":
          backdrop.classList.add("tiger");
          break;
        case "Elephants":
          backdrop.classList.add("elephant");
          break;
        case "Bears":
          backdrop.classList.add("bear");
          break;
        case "Rhinos":
          backdrop.classList.add("rhino");
          break;
        case "Pangolins":
          backdrop.classList.add("pangolin");
          break;
      }
    } else {
      switch (species) {
        case "Tigers":
          backdrop.classList.remove("tiger");
          break;
        case "Elephants":
          backdrop.classList.remove("elephant");
          break;
        case "Bears":
          backdrop.classList.remove("bear");
          break;
        case "Rhinos":
          backdrop.classList.remove("rhino");
          break;
        case "Pangolins":
          backdrop.classList.remove("pangolin");
          break;
      }
    }
  }

  render() {
    return (
      <>
        <div id="menu-backdrop" />
        <div className="dropdown-main-container">
          <div>
            <div className="species-label">
              <div>Species —</div>
            </div>
            <div className="first-of-type slider">
              <Link
                to={{
                  pathname: `/article/tigers`,
                  speciesId: "tiger",
                  hash: "#top",
                }}
              >
                <h2
                  onClick={close}
                  onMouseEnter={this.updateBackground}
                  onMouseLeave={this.updateBackground}
                  className="slider-text0"
                >
                  Tigers
                </h2>
              </Link>
            </div>
            <div className="slider">
              <h2
                onClick={close}
                onMouseEnter={this.updateBackground}
                onMouseLeave={this.updateBackground}
                className="slider-text1"
              >
                Elephants
              </h2>
            </div>
            <div className="slider">
              <h2
                onClick={close}
                onMouseEnter={this.updateBackground}
                onMouseLeave={this.updateBackground}
                className="slider-text2"
              >
                Bears
              </h2>
            </div>

            <div className="slider">
              <h2
                onClick={close}
                onMouseEnter={this.updateBackground}
                onMouseLeave={this.updateBackground}
                className="slider-text3"
              >
                Rhinos
              </h2>
            </div>
            <div className="slider">
              <h2
                onClick={close}
                onMouseEnter={this.updateBackground}
                onMouseLeave={this.updateBackground}
                className="slider-text4"
              >
                Pangolins
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
