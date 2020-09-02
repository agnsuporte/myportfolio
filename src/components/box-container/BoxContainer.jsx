import React from "react";

import "./box-continer.css";

const BoxContainer = (props) => {
  const { title, subtitle, listBox } = props;

  return (
    <>
      <div className="s-heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="b-container">
        {listBox.map((box) => (
          <div className="s-box" key={box._id}>
            <div className="s-b-img">
              <div className="s-type">{box.servType}</div>
              <img src={box.imagesrc} alt="." />
            </div>
            <div className="s-b-text">
              <a href={box.link}>{box.text}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BoxContainer;
