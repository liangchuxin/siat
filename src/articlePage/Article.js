import axios from "axios";
import React from "react";
import "./Article.scss";
import FullWidthSpecies from "../homePage/FullWidthSpecies";
import ArticleBlock from "./ArticleBlock";
import { species } from "../App";
import getArticleList from "./webCrawler.js";

function getSpeciesInfo(url) {
  var speciesId = getSpeciesId(url);
  return species.find((s) => s.id === speciesId);
}

function getSpeciesId(url) {
  return url.split("/article/")[1];
}
// console.log(props.match.url);

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: [] };
  }

  componentDidMount() {
    axios
      .get(
        `http://api.serpstack.com/search?access_key=8869dd9d5c93b9c45044f7776c869198&sort=date&query=illegal+trade+wildlife+${getSpeciesId(
          this.props.match.url
        )}`
      )
      .then((response) => {
        // `response` is an HTTP response object, whose body is contained in it's `data` attribute
        // This will print the HTML source code to the console
        this.setState({
          article: response.data.organic_results,
        });
        console.log(response.data);
        console.log(this.state.article);
      })
      .catch((error) => {
        alert(`${error}`);
      });
  }

  render() {
    return (
      <div>
        <FullWidthSpecies
          key={getSpeciesId(this.props.match.url)}
          speciesInfo={getSpeciesInfo(this.props.match.url)}
          readMore={false}
        />

        {this.state.article.map((article) => {
          return <ArticleBlock key={article.title} articleInfo={article} />;
        })}
        <div className="more-container">
          <div className="more">Load More...</div>
        </div>
      </div>
    );
  }
}
