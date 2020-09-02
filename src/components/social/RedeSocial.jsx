import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import "./rede-social.css";

const RedeSocial = () => {
  return (
    <div className="social">
      <a href="/">
        <FaFacebook />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
      <a href="/">
        <FaInstagram />
      </a>
      <a href="/">
        <FaYoutube />
      </a>
    </div>
  );
};

export default RedeSocial;
