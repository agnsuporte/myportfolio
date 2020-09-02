import React from "react";

import "./pre-load.css"

const PreLoader = (props) => {

  const { height } = props;

  let style = height ? {"height": height} : {}

  return (
    <div className="lds-spinner" style={style} >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default PreLoader;
