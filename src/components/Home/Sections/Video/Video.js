import React from "react";
import "./video.css";

const Video=()=>{
    return(
        <>
	<section id="nits">
		<div>
		<div><h2 class="section-tittle">ASME-NITS VIDEOS</h2>
		</div>

		<div><h1 class="section-tittle-2">ASME-NITS VIDEOS</h1>
		</div>
	    </div>
		<div class="nits container">
			
			<div class="vl"></div>
			<div class="v2"></div>
			<div class="col-left">
				<div class="nits-video">
					<video width="470" height="400" controls>
                        <source src="demo-video.mp4" type="video/mp4"/>
                    </video>
				</div>
				<div class="video-button">
					<a href="#" class="previous round"> &#8249;   prev</a>
					{/* <!-- <h5>Previous</h5> <h5>Next</h5> --> */}
                    <a href="#" class="next round"> next &#8250;</a>

                </div>
			</div>
			<div class="col-right">
				<p>Etiam eu lacinia odio. Curabitur nec erat a odio pellentesque maximus quis et urna. Pellentesque blandit mi eu efficitur cursus. Phasellus a dolor in felis ornare fermentum. Duis eget massa mauris. Nulla facilisi. Vivamus consequat accumsan tempor.</p>
				<a href="#" type="button" class="cta">see all</a>
			</div>
		

		</div>
	</section>
        </>);
};


export default Video;