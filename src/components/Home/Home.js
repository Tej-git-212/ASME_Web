import React from "react";
import About from "./Sections/About/About";
import Our from "./Sections/Our/Our";
import Gallery from "./Sections/Gallery/Gallery";
import Video from "./Sections/Video/Video";
import Guest from "./Sections/Guest/Guest";
const Home =()=>{
    return(
        <>
        <div className="home">
            <About/>
            <Our/>
            <Gallery/>
            <Video/>
            <Guest/>
        </div>

        </>
        )
}

export default Home;