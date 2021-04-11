import React from "react";
import "./timeline.css";
import imgis from "../../ui_utils/img/banner1.jpg"
import { ReactComponent as Vertical } from "../../ui_utils/svg/vertical.svg";
const Time = () => {
  
  return (
    <div className="time_line_is">
      <ul className="time_list">
        <li id="li1">
          <h3>Engineering Competition</h3>
          <img src={imgis} className="img_li"/>
          <Vertical className="svg_color_red" />
          <p>Series of stimulating competitions</p>
        </li>
        <li id="li2">
          
            <h3>Engineering Competition</h3>
            <img src={imgis} className="img_li"/>
            <Vertical className="svg_color_green" />
            <p>Series of stimulating competitions</p>
          
        </li>
        <li id="li3">
          
            <h3>Engineering Competition</h3>
            <img src={imgis} className="img_li"/>
            <Vertical className="svg_color_orange" />
            <p>Series of stimulating competitions</p>
          
        </li>
        <li id="li4">
          
            <h3>Engineering Competition</h3>
            <img src={imgis} className="img_li"/>
            <Vertical className="svg_color_blue" />
            <p>Series of stimulating competitions</p>
          
        </li>
      </ul>
    </div>
  );
};

export default Time;
