import React from "react";

import "./portfolio-container.css";

const PortfolioContainer = (props) => {
  const { portfolios } = props;

  return (
    <div className="p-container">
      {portfolios.map((port) => (
        <div className="p-box" key={port._id}>
          <div className="overlay-text">
            <h1>{port.title}</h1>
            <p>{port.text}</p>
          </div>
          <img src={port.image} alt="." />
        </div>
      ))}

    </div>
  );
};

export default PortfolioContainer;
