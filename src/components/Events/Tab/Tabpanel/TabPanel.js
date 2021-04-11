import { log } from "@tensorflow/tfjs-core/dist/log";
import React from "react";
import "./tabpanel.css";

const Tabpanel=(props)=>{
    return(
    <div className="tab_panel">
        <div className="banner">
            <img src={props.img} style={{height:"350px",width:"100%"}} />
            <div className="title">
                <div>
                    <header>{props.title}</header>
                    <p>{props.content}</p>
                </div>
            </div>
            <div className="background_color">
            </div>
            
        </div>
        <div className="content">
               <div className="write">
                    <p>
                        {props.contentP}
                    </p>
               </div> 
               <div className="logo">
                <img src={props.imglogo} />
               </div>
        </div>
        <div className="images">
            {props.imgArr.map((item)=>{
                console.log(item,"img jitul")
                return(
                
                    <img src={item}/>
                )
            })}
        </div>
    </div>)
}

export default Tabpanel;