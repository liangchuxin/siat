import React from "react";
import "./ArticleBlock.scss";

export default class ArticleBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.articleInfo !== this.props.articleInfo) this.forceUpdate();
  }
  render() {
    return (
      <div className="article-container">
        <a target="_blank" href={this.props.articleInfo.url}>
          <div className="content">
            <h2>
              {this.props.articleInfo.title}{" "}
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </h2>

            <p className="details">
              Published on <b>{this.props.articleInfo.domain}</b>
            </p>
            <p className="extract">{this.props.articleInfo.snippet}</p>
          </div>
          {/* <img className="thumb" src={props.articleInfo.thumb} /> */}
        </a>
      </div>
    );
  }
}
