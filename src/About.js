import React from "react";
import desc from './images/desc.png';
import './css/About.css';

function About() {
    return (
        <div id='about' className="md:ml-10 md:mr-10 mr-5 ml-5 mt-2 pt-5 pb-10 pl-1 pr-2">
            <h1 className="text-4xl pt-5 pb-1">More about us</h1>

            <div className="paragraph">
                <div>
                    <img className="p-1" src={desc} alt='logo2' />
                </div>

                <div>
                    <p className="pb-5 pl-1 pr-1 mt-1 mb-2">
                        QEM is independently owned and operated by its leadership team alongside global business partners. We are dedicated to cultivating enduring and sustainable partnerships with our clients and suppliers.
                    </p>
                    <p className="pb-5 pl-1 pr-1 mt-1 mb-2">
                        Specializing in the procurement, storage, and delivery of bulk materials, we serve clients across the world. Our commitment to responsible trade ensures we consistently meet the highest standards in operational efficiency, safety, and quality throughout our supply chain.
                    </p>
                    <p className="pb-5 pl-1 pr-1 mt-1 mb-2">
                        QEM was founded with a mission to support both developing and established resource companies, united by a vision to create a brighter, more sustainable future for the industry.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About
