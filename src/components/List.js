import React from "react";

export default function List(props) {
  return (
    <div className="ui celled list" key={props.val}>
      <div>
        <b>{props.title}</b>
      </div>
      <span dangerouslySetInnerHTML={{ __html: props.desc }}></span>
      <a
        className="ui button"
        href={`https://en.wikipedia.org/?curid=${props.val} `}
      >
        Click For More{" "}
      </a>
    </div>
  );
}
