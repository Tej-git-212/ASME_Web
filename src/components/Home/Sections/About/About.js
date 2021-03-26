import React from "react";
import "./../Sections.css";
import Title from "../../../ui_utils/Title/Title";
const About =()=>{
    return(
        <>
        <div className="About">
            <header>
                <Title type={false} text={"ABOUT US"}/>
                <div className="len"></div>
            </header>
            <div className="content">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
        </div>

        </>
        )
}

export default About;