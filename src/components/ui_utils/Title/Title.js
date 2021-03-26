import React from "react";
import "./Title.css"
const Title =(props)=>{

    if(props.type){
        return(
            <>
            <div className="constainer">
               <div id='overlay'>
                  <div className="background">
                    <div className="len1"></div>  
                     {props.text}
                     <div className="len2"></div>
                   </div>
                
                 <div className="top_text">
                    {props.text}
                 </div>
                </div>
            </div>
    
            </>
            )
    }
    return(
        <>
        <div className="constainer">
           <div id='overlay'>
              <div className="background">
                 {props.text}
               </div>
             <div className="top_text">
                {props.text}
             </div>
            </div>
        </div>

        </>
        )
}

export default Title;