import React from "react";
// assets
import "./About.scss";

export default function About() {
  return (
    <>
      <div className="aboutHeaderBg">
        <div className="aboutHeaderContainer">
          <h1>About SIAT</h1>
        </div>
      </div>
      <p className="aboutDescription text-regular">
        Huge numbers exotic and endangered animals are victim to illegal animal
        trading each year and our group has decided to create a website that
        collects the statistics and facts about such animals. We have chosen 5
        animals to focus on, they are the following:{" "}
        <a href="/article/tiger">Tigers</a>,{" "}
        <a href="/article/elephant">Elephants</a>,{" "}
        <a href="/article/bear">Bears</a>, <a href="/article/rhino">Rhinos</a>,
        and <a href="/article/pangolin">Pangolins</a>. The main purpose of this
        website is to raise awareness about this issue. we all collaborated in
        the creation of this website and each chose roles that will be
        challenging for us. Celia focused on coding the website and creating a
        web crawler of collect the information, improving her coding skills.
        Jessica and Elyse created artworks to decorate this website and improved
        their artistic skills.
      </p>
    </>
  );
}
