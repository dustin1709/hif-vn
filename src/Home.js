import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import background from './images/background.png';

function Home() {
    return (
        <div id='home'>
        <div style={{marginTop: '45px', clear: 'both'}}></div>
        <img src={background} alt="background" />
        
        {/* <Carousel
         className="md:ml-10 md:mr-10" autoPlay={true} 
         infiniteLoop={true} interval={2500} 
         showArrows={false} showThumbs={false} showIndicators={false}>
            <div>
                <img src={cover1} />
            </div>
            <div>
                <img src={cover4} />
            </div>
            <div>
                <img src={cover2} />
            </div>
            <div>
                <img src={cover3} />
            </div>
        </Carousel> */}
        </div>
    )
}

export default Home
