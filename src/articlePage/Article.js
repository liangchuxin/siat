import React from "react";
import "./Article.scss";
import FullWidthSpecies from "../homePage/FullWidthSpecies";
import ArticleBlock from "./ArticleBlock";
import { species } from "../App";

const article = [
  {
    title: "Title of Article",
    author: "Celia",
    date: "June 5",
    extract:
      "Lorem ipsum dolor sit amet, tritani efficiantur sit cu, dicunt theophrastus eam ne, quot deleniti reformidans ut mei. Iudico impetus quot deleniti reformidans ut mei. definiebas sea. Duis qualisque interpretaris qui in, aeterno omittam his ea. Cu mei placerat pertinacia consetetur, vis at erat accus.",
    thumb: "https://i.loli.net/2020/05/14/jCcMtHsW3NaoElL.png",
    link: "https://baidu.com",
  },
  {
    title: "Title of Article 2",
    author: "Jack",
    date: "June 4",
    extract:
      "Lorem ipsum dolor sit amet, tritani efficiantur sit cu, dicunt theophrastus eam ne, quot deleniti reformidans ut mei. Iudico impetus quot deleniti reformidans ut mei. definiebas sea. Duis qualisque interpretaris qui in, aeterno omittam his ea. Cu mei placerat pertinacia consetetur, vis at erat accus.",
    thumb: "https://i.loli.net/2020/05/14/jCcMtHsW3NaoElL.png",
    link: "https://google.com",
  },
];
export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(props);
    console.log(props.location.state);
  }

  render() {
    return (
      <div>
        <FullWidthSpecies
          key={species[4].name}
          speciesInfo={species[4]}
          readMore={false}
        />
        <ArticleBlock key={article[0].title} articleInfo={article[0]} />
        <ArticleBlock key={article[1].title} articleInfo={article[1]} />
        <div className="more-container">
          <div className="more">Load More...</div>
        </div>
      </div>
    );
  }
}
