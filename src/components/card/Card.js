import React from "react";
import { Link } from "react-router-dom";
import Html from "../../assets/img/logo_html.png";
import Css from "../../assets/img/logo_css.png";
import Brush from "../../assets/img/logo_brush.png";

const Card = ({ src, url, title }) => {
  return (
    <div>
      <div className="box">
        <Link to="./html">
          <img src={Html} alt="" />
        </Link>
        <h3>HTML5 Markup</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>

      <div className="box">
        <Link to="./css">
          <img src={Css} alt="" />
        </Link>
        <h3>CSS</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>

      <div className="box">
        <Link to="./graphic-design">
          <img src={Brush} alt="" />
        </Link>
        <h3>Graphic Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
    </div>
  );
};

export default Card;
