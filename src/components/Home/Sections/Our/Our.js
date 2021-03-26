import React from "react";
import "./../Sections.css";
import Title from "../../../ui_utils/Title/Title";
import image from "../../../ui_utils/img/test.jpg"
import {Link} from "react-router-dom";
const Our =()=>{
    return(
        <>
        <div className="Our">
            <header>
                <Title type={true} className="toto" text={"OUR SERVICES"}/>
            </header>
            <div className="content">
                   <div className="service">
                         <img src={image}/>       
                         <div className="content_box">
                         <div className="line">
                             <div className="dot"></div>
                         </div>
                         <div>
                            <h3>ART</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <a href={"#"}>
                             see more ...
                         </a>
                         </div> 
                         </div>

                   </div> 
                   <div className="service">
                         <img src={image}/>       
                         <div className="content_box">
                         <div className="line">
                             <div className="dot"></div>
                         </div>
                         <div>
                            <h3>SCIENCE</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <a href={"#"}>
                             see more ...
                         </a>
                         </div> 
                         </div>

                   </div> 
                   <div className="service">
                         <img src={image}/>       
                         <div className="content_box">
                         <div className="line">
                             <div className="dot"></div>
                         </div>
                         <div>
                            <h3>ALLIED SCIENCE</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <a href={"#"}>
                             see more ...
                         </a>
                         </div> 
                         </div>

                   </div> 
                   <div className="service lock">
                         <img src={image}/>       
                         <div className="content_box">
                         <div className="line">
                             <div className="dot"></div>
                         </div>
                         <div>
                            <h3>MULTIDISCIPLINARY ENGINEERING</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <a href={"#"}>
                             see more ...
                         </a>
                         </div> 
                         </div>

                   </div> 
                   
            </div>
        </div>

        </>
        )
}

export default Our;