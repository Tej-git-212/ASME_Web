import React from "react";
import "./Guest.css";

const Guest=()=>{
    return(
      <section class="carousel">
        <div id="carousel-slide" class="carousel slide" data-ride="false"/>
        <div class="carousel-inner">
            <div class="carousel-item active container-fluid">
            <img class="carousel-image" src="pic2.jpeg" alt="profile"/>
            <h2>Mr.something1</h2>
            <em class="carousal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</em>
            </div>
            <div class="carousel-item  container-fluid">
                <img class="carousel-image" src="pic1.jpeg" alt="profile"/>
                <h2>Mr.something2</h2>
                <em class="carousal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</em>
            </div>
            <div class="carousel-item  container-fluid">
                <img class="carousel-image" src="pic2.jpeg" alt="profile"/>
                <h2>Mr.something3</h2>
                <em class="carousal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</em>
                
            </div>
            
        </div>
        <a class="carousel-control-prev" type="button" data-bs-target="#carousel-slide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
        </a>
        <a class="carousel-control-next" type="button" data-bs-target="#carousel-slide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
        </a>
        </section>
    )
}


export default Guest;