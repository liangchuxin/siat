import React from "react";
import "./ArticleBlock.scss";

export default function ArticleBlock(props) {
  return (
    <div className="article-container">
      <a target="_blank" href={props.articleInfo.link}>
        <div className="content">
          <h2>
            {props.articleInfo.title}{" "}
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </h2>

          <p className="details">
            Written by <b>{props.articleInfo.author}</b> on{" "}
            <b>{props.articleInfo.date}</b>
          </p>
          <p className="extract">{props.articleInfo.extract}</p>
        </div>
        <img className="thumb" src={props.articleInfo.thumb} />
      </a>
    </div>
  );
}
