import React from "react";
import Header from "../../components/Header/Header";
import img1 from "../../Assets/images/hero.jpg";
import "../OurStory/OurStory.css";

function OurStory (){
    return(
        <div className="OurStory">
            <Header/>
            <img src={img1} alt="" />
        </div>
    )
}
export default OurStory;