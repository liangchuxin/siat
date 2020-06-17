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
    this.state = { article: [], pageNumber: 1, loading: false };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
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
        this.setState({ loading: false });
        console.log(response.data);
        console.log(this.state.article);
      })
      .catch((error) => {
        alert(`axois error: ${error}`);
      });
  }

  loadMore() {
    this.setState({ loading: true });
    var tempPageNumber = this.state.pageNumber;
    tempPageNumber += 1;
    this.setState({ pageNumber: tempPageNumber }, () => {
      console.log(this.state.pageNumber);
    });
    axios
      .get(
        `http://api.serpstack.com/search?access_key=8869dd9d5c93b9c45044f7776c869198&sort=date&query=illegal+trade+wildlife+${getSpeciesId(
          this.props.match.url
        )}
        &page=${this.state.pageNumber}`
      )
      .then((response) => {
        // `response` is an HTTP response object, whose body is contained in it's `data` attribute
        // This will print the HTML source code to the console
        var tempArticle = this.state.article;
        tempArticle = tempArticle.concat(response.data.organic_results);
        console.log(tempArticle);
        this.setState(
          {
            article: tempArticle,
          },
          () => {
            console.log(response.data);
            console.log(this.state.article);
          }
        );
        this.setState({ loading: false });
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
        <div
          className={
            this.state.loading ? "more-container wait" : "more-container"
          }
          onClick={this.loadMore}
        >
          <div className="more">Load More...</div>
        </div>
      </div>
    );
  }
}
