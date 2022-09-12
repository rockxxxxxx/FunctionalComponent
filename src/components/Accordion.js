import React, { useState } from "react";

export default function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState("");
  const onListClick = (index) => {
    setActiveIndex(index);
  };
  return props.data.map((d, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <div
        onClick={() => onListClick(index)}
        key={index}
        className="ui styled  accordion"
      >
        <div className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {d.key}
        </div>
        <div className={`content ${active}`}>
          <p>{d.value}</p>
        </div>
      </div>
    );
  });
}
