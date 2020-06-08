import React from "react";
import "./ArticleBlock.scss";

export default function ArticleBlock(props) {
  console.log(props.articleInfo);
  console.log(props.articleInfo.displayed_url);
  return (
    <div className="article-container">
      <a target="_blank" href={props.articleInfo.url}>
        <div className="content">
          <h2>
            {props.articleInfo.title}{" "}
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </h2>

          <p className="details">
            Published on <b>{props.articleInfo.domain}</b>
          </p>
          <p className="extract">{props.articleInfo.snippet}</p>
        </div>
        {/* <img className="thumb" src={props.articleInfo.thumb} /> */}
      </a>
    </div>
  );
}
