import React from "react";
import About from "./Sections/About/About";
import Our from "./Sections/Our/Our";
import Gallery from "./Sections/Gallery/Gallery";

const Home =()=>{
    return(
        <>
        <div className="home">
            <About/>
            <Our/>
            <Gallery/>
        </div>

        </>
        )
}

export default Home;