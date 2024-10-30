import React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import picture from './images/port.jpg';
import nature from './images/nature.jpg';
import truck from './images/truck.jpg';

function Contact() {
    

    return (
        <div id='import-export' className="pt-7 pl-7 pr-5 pb-5" style={{backgroundColor: '#0C0404'}}>
            <h1 className="text-4xl w-[211px] text-white pb-4 pt-5" style={{borderBottom: '5px solid white'}}>Import Export</h1>
            <div className="pt-5 pb-5" style={{
                display: 'grid',
                gridTemplateColumns: '35% 65%',
            }}>
            <img src={picture} />
            <p className="pb-5 ml-5 text-white">
                As an independent trading company. With a hands-on approach, we don’t just focus on trading, but also on providing innovative products and practical bulk supply chain solutions.
            </p>
            </div>
            <h1 className="text-xl w-[120px] text-white pb-2" style={{borderBottom: '2px solid white'}}>Sustainability</h1>
            <div className="pt-5 pb-5" style={{
                display: 'grid',
                gridTemplateColumns: '35% 65%',
            }}>
                <img src={nature} />
                <p className="pb-5 ml-5 text-white">
                    At HIF import export trading arm, we are committed to sustainability is at the core of everything we do. We strive to operate responsibly, minimizing environmental impact while ensuring long-term resource management. By integrating sustainable practices into our operations and supply chains, we aim to protect the environment, support local communities, and contribute to a greener future. Sustainability isn't just a goal—it's a guiding principle in our journey toward creating value for our stakeholders and the planet.
                </p>
            </div>
            <h1 className="text-xl w-[110px] text-white pb-2" style={{borderBottom: '2px solid white'}}>Core Values</h1>
            <div className="pt-5 pb-5" style={{
                display: 'grid',
                gridTemplateColumns: '35% 65%',
            }}>
                <img src={truck} />
                <p className="pb-5 ml-5 text-white">
                    We believe that by delivering dependable solutions and standing by our commitments, long-term success naturally follows. Our focus on reliability ensures that our clients can count on us to meet their needs, no matter the circumstances.
                </p>
            </div>

            <h1 className="text-xl w-[90px] text-white pb-2 pt-3" style={{borderBottom: '2px solid white'}}>Key Areas</h1>
            <ul className="pt-3 pb-5 text-white">
                <li>
                    Metals
                </li>
                <li>
                    Agricultural products
                </li>
                <li>
                    Energy
                </li>
                <li>
                    Hand crafted products
                </li>
            </ul>
            
            <div style={{marginTop: '80px', clear: 'both'}}></div>
        </div>
    )
}

export default Contact
