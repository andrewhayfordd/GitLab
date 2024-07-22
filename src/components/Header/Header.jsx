import React from "react";
import { useEffect } from "react";
import "../Header/Header.css";
import Logo from "../../Assets/images/logo2.png";
import Logo2 from "../../Assets/images/logo3.png";
import img1 from "../../Assets/images/img1.png";
import img2 from "../../Assets/images/img2.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../../Assets/fontawesome-free-6.4.0-web/css/all.min.css'

function Header (){

    window.addEventListener("scroll", function(){
        let header = document.getElementById("myHeader");
         let sticky = header.offsetTop;
         if (window.scrollY > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
    },)
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
      });
      const isSticky = (e) => {
        const header = document.querySelector(".Header");
        const scrollTop = window.scrollY;
        scrollTop >= 750
        ? header.classList.add("sticky") : header.classList
        ? header.classList.remove("sticky") : header.classList.add("sticky");
      };


    return(
        <div className="Header" id="myHeader">

          <div className="TopHeader">
         <div className="logo"><Link to={"/"}><img src={Logo} alt="" /></Link></div>

         <div className="nav">
            <li><NavLink to={"/ourstory"}><span>Our Story</span></NavLink></li>
            <li><Link to={{}}>Gallery</Link></li>
            <li><Link to={{}}>Rooms</Link></li>
            <li><Link to={{}}>Experience</Link></li>
            <li><Link to={{}}>Dining</Link></li>
            <li><Link to={{}}>Meetings & Events</Link></li>
            <li><Link to={{}}>Contact Us</Link></li>
         </div>

         <div className="button">
            <button>FIND YOUR PERFECT SUITE</button>
         </div>
         </div> 

         <div className="BottomHeader">
            <div className="logo"><img src={Logo2} alt="" /></div>

            <div className="reviews">
                <div><img src={img1} alt="" /></div>
                <div><img src={img2} alt="" /></div>
                <div className="text">Read our <b>97 reviews<i className="fas fa-chevron-right"></i></b></div>
            </div>

            <div className="text"><Link to={''}>Find Us</Link></div>
         </div>


        </div>
    );
};
export default Header;