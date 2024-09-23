import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import cover1 from './images/cover.png';
import cover2 from './images/cover1.png';
import cover3 from './images/cover2.png';
import cover4 from './images/cover3.png';

function Home() {
    return (
        <div id='home'>
        <div style={{marginTop: '90.25px', clear: 'both'}}></div>
        <Carousel
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
        </Carousel>
        </div>
    )
}

export default Home
