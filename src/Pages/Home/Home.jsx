import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "../../Pages/Home/Home.css";
import Header from "../../components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import priceM from "../../Assets/images/priceM.jpg";
import luxury from "../../Assets/images/luxury.jpg";
import luxury2 from "../../Assets/images/luxury2.jpg";
import gallery1 from "../../Assets/images/gallery.jpg";
import gallery2 from "../../Assets/images/gallery2.jpeg";
import gallery3 from "../../Assets/images/gallery3.jpg";
import gallery4 from "../../Assets/images/gallery4.jpg";

function Home (){

    window.addEventListener('scroll', reveal);
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');
        for(var i=0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 10;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active1');
            }
            else{
                reveals[i].classList.remove('active1');
            }
        }
    }
    
    window.addEventListener('scroll', reveal2);
    function reveal2(){
        var reveal2 = document.querySelectorAll('.reveal2');
        for(var i=0; i < reveal2.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveal2[i].getBoundingClientRect().top;
            var revealpoint = 0;

            if(revealtop < windowheight - revealpoint){
                reveal2[i].classList.add('active2'); 
                window.removeEventListener('scroll', reveal2);
             }
            // else{
            //     reveal2[i].classList.remove('active2');
            // }
        }
    }

    window.addEventListener('scroll', reveal4);
    function reveal4(){
        var reveal4 = document.querySelectorAll('.reveal4');
        for(var i=0; i < reveal4.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveal4[i].getBoundingClientRect().top;
            var revealpoint = 0;

            if(revealtop < windowheight - revealpoint){
                reveal4[i].classList.add('active4'); 
                window.removeEventListener('scroll', reveal4);
             }
            // else{
            //     reveal2[i].classList.remove('active2');
            // }
        }
    }

    const OurSuite = [
        {
            image: require("../../Assets/images/sem-hotels-tablet.jpg"),
            name: "PRESIDENTIAL CLUB STUDIO SUITE",
            numberOfRooms: "ONE BEDROOM",
            size: "852M",
            btn: "VIEW ROOM"
        },
        {
            image: require("../../Assets/images/sem-hotels-tablet.jpg"),
            name: "STANDARD LOFT SUITE",
            numberOfRooms: "ONE BEDROOM",
            size: "852M",
            btn: "VIEW ROOM"
        },
        {
            image: require("../../Assets/images/sem-hotels-tablet.jpg"),
            name: "AMBASSADOR LOFT SUITE",
            numberOfRooms: "ONE BEDROOM",
            size: "852M",
            btn: "VIEW ROOM"
        },
        {
            image: require("../../Assets/images/sem-hotels-tablet.jpg"),
            name: "DELUXE EXECUTIVE SUITE",
            numberOfRooms: "ONE BEDROOM",
            size: "852M",
            btn: "VIEW ROOM"
        },
        {
            image: require("../../Assets/images/sem-hotels-tablet.jpg"),
            name: "DELUXE PREMIER SUITE",
            numberOfRooms: "ONE BEDROOM",
            size: "852M",
            btn: "VIEW ROOM"
        },
        {
            image: require("../../Assets/images/sem-hotels-tablet.jpg"),
            name: "PENTHOUSE SUITE",
            numberOfRooms: "ONE BEDROOM",
            size: "852M",
            btn: "VIEW ROOM"
        },
    ]
    const Experiences = [
        {
            image: require('../../Assets/images/luxury2.jpg'),
            text: "ALL DAY DINING",
        },
        {
            image: require("../../Assets/images/luxury.jpg"),
            text: "VISA ON ARRIVAL",
        },
        {
            image: require("../../Assets/images/sem-hotels-tablet.jpg"),
            text: "AIRPORT TRANSFERS"
        }
    ]


    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
    
    // const cardRef = useRef(null);
    // const handleScroll = () => {
    //     const card = cardRef.current;
    //     const rect = card.getBoundingClientRect();
    //     const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

    //     if (isInViewport) {
    //         card.classList.add('.sit-Up');
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // };

        const [count, setCount] = useState(1);
        let sliderRef = useRef(null);
        const increment = () => {
            if(count < 7){
                setCount(count + 1);
            }
            sliderRef.slickNext();
        };
    
        const decrement = () => {
            if(count > 1){
                setCount(count - 1);
            }
            sliderRef.slickPrev();
        };

        
            var settings = {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5000,
              pauseOnHover: true
            };
    return(
        <div className="Home">
            <Header/>
            
            <div className="hero">
                <div className="texts reveal">
                <div className="text">LUXURY HAS A NEW ADDRESS</div>
                <div className="button"><button>FIND YOUR PERFECT SUITE</button></div>
                </div>
            </div>
           
            <div className="oursuites">
                <div className="head">
                <div className="title">OUR SUITES</div>
                <div className="count">
                    <button onClick={decrement}><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></button>
                        <span className="num">&nbsp;&nbsp;&nbsp;&nbsp;{count} </span><span><i className="fas fa-minus"></i> 7&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button onClick={increment}><i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></button>
                </div>
                </div>
                <Slider  ref={slider => { sliderRef = slider; }} {...settings} className="main">
                    {OurSuite.map((lists)=> (
                     <div className="suites reveal2">
                        <div><img src={lists.image} alt="" /></div>
                        <div className="name"><center>{lists.name}</center></div>
                        <div className="numBed">{lists.numberOfRooms}</div>
                        <div className="size">SIZE-{lists.size}</div>
                        <div className="btn"><button>{lists.btn}</button></div>
                     </div>
                    ))}
                </Slider>
                <div className="seeallBtn"><button>SEE ALL SUITES</button></div>
            </div>
            
            <div className="priceMatch">
                <div className="title">PRICE MATCH GUARANTEE</div>

                <div className="content">
                    <div className="img"><img src={priceM} alt="" /></div>

                <div className="text">
                    <div className="title2">BOOK WITH CONFIDENCE</div>
                    <div className="text1">
                        We always guaratee the best prices possible, but if you come across a lower
                        qualified price on another website, were willing to match it before you book.
                    </div>
                    <div className="text2">
                        If you find a better rate, we'll match it before you book.
                    </div>
                    <button>FIND OUT MORE</button>
                </div>

                </div>
            </div>

            <div className="luxury">
            <div className="head">Luxury</div>
            <div className="flex">
                <div className="texts">
                    <div className="title">FIVE STAR LUXURY HOTEL & SUITES</div>
                    <div className="text">Welcome to Accra's premium luxury 5 star accommodation hotel suites,
                        location in the upscale Airport Residential area, near the sophisticated 
                        neighborhood of East Legon and the heart of the busting capital.
                    </div>
                    <button>READ MORE</button>
                </div>
                <div className="img">
                    <div className="img1"><img src={luxury} alt="" /></div>
                    <div className="img2"><img src={priceM} alt="" /></div>
                </div>
                </div>
            </div>

            <div className="experiences">
                <div className="title">EXPERIENCES</div>
                <div className="contents">
                  {Experiences.map((items) =>(
                    <div className="content reveal4">
                        <div className="img"><img src={items.image} alt="" /></div>
                        <div className="text">{items.text}</div>
                    </div>
                  ))}
                </div>
                <button>SEE EXPERIENCES</button>
            </div>

            <div className="specialOffers">
                <div className="head">SPECIAL OFFERS</div>
                <div className="content">
                    <div className="img"><img src={luxury2} alt="" /></div>
                    <div className="text">
                        <div className="title">WEEKEND BLISS PACKAGE</div>
                        <p>Enjoying La Dolce Vita at Kwarleyz Residence is the 
                            perfect way to spend a momorable weekend with friend or loved one.
                        </p>
                        <h5>WHAT'S INCLUDED</h5>
                        <p>- Luxurious accommodation in suite<br/>
                           - Buffet Breakfast for 2, delivered to the suite if desired<br/>
                           - A relaxed departure, with late check-out at 3:00pm<br/>
                           - 20% off rejuvenating Spa services Welcome drink</p>
                    <button>FIND OUT MORE</button>
                    </div>
                </div>
                &nbsp;<br/>
                &nbsp;<br/>
                &nbsp;<br/>
                &nbsp;
                <div className="content">
                    <div className="img"><img src={luxury2} alt="" /></div>
                    <div className="text">
                        <div className="title">EXTENDED STAY DELIGHTS</div>
                        <p>Stay for 10 nights or more and unlock exclusive rates that
                            decrease the longer you stay. Enhance your journey with added 
                            value benefits such as complimentary airport transfer, laundry
                            credits, and discounts on dining & spa services.
                        </p>
                        <h5>WHAT'S INCLUDED</h5>
                        <p>- Enjoy 2 pieces of complimentary laundry service<br/>
                           - Comlimentary Airport Transfer<br/>
                           - Breakfast included for all 5 nights<br/>
                           - Early check-in available from 10 AM</p>
                    <button>FIND OUT MORE</button>
                    </div>
                </div>
            </div>

            <div className="gallery">
                <div className="head">SUITE, FACILITIES & AMENITIES</div>
                <div className="content">
                    <div className="imgs">
                        <div className="imgCl1">
                            <div><img src={gallery1} alt="" /></div>
                            <div><img src={gallery2} alt="" /></div>
                        </div>
                        <div className="imgCl2">
                            <img src={gallery3} alt="" />
                        </div>
                        <div className="imgCl3">
                            <img src={gallery4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="foot"><button>SEE FULL GALLERY</button></div>
            </div>

            <div className="simple">
                <div className="text">PROVIDING AN ALTERNATIVE AND SOPHISTICATED LIFESTYLE EXPERIENCE</div>
                <div className="button"><button>CHECK AVAILABILITY</button></div>
            </div>

            <h1>Welcome to the git plus branch</h1>

        </div>
    )
}
export default Home;