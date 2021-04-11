import React from "react";
import timeImg from "../../ui_utils/img/banner1.jpg";
import "./timeline.css";
import Exp from "./exp";
import Time from "./Time";
const TimeLine=()=>{
    return(
    <section className="timeLine">
      <div className="header_img">
        <img src={timeImg}/>
      </div>
      <div className="header_title">
        <h3>ASME E-FEST IS A WAY MORE THAN A SERIES OF EVENTS</h3>
        <div className="border">
        </div>
      </div>
      <div className="main">
          {/* <Exp/> */}
          <Time/>
      </div>
    </section>

    )
}


export default TimeLine;