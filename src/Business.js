import React from "react";
import trading from './images/EU.png';
import cargo from './images/logistic.png';
import building from './images/real-estate.png';
import nav from './images/nav.png';
import './css/Business.css';

function Business() {
    return (
        <div id='business' className="p-5" style={{backgroundColor: '#021d68'}}>
            <h1 className="text-4xl text-white ml-3 pr-5 pt-5 pb-3 w-[205px]" style={{borderBottom: '5px solid #FFFF'}}>What we do</h1>
            <div className="business">
                <div className="box">
                    <img src={trading} alt="trading-icon"/>
                    <h1 className="text-white text-center text-2xl">Golden Visa Immigration Investment Consulting</h1>
                    <p>At HIF Consulting Singapore Pte Ltd., we are dedicated to guiding you through each step of your investment journey toward a secure and prosperous future. With a specialized focus on Golden Visa programs, we provide expert consulting that simplifies the immigration process while maximizing investment potential in some of the world's most desirable markets. Discover the advantages of global mobility and secure investments with a partner who puts your success at the heart of everything we do.</p>
                </div>
                <div className="box">
                    <img src={building} alt="building-icon"/>
                    <h1 className="text-white text-center text-2xl">Real Estate Investment Consulting</h1>
                    <p>
                        Positioning and developing real estate projects in Athens, Greece, to cater to international investors participating in the Greek Golden Visa program.
                        <br />
                        Carefully selecting prime project locations near economic hubs and complete living amenities to ensure growth potential and maximize rental and residential benefits for investors.
                        <br />
                        Developing high-quality projects to provide an exceptional investment and living experience for our partners and investors.
                    </p>
                </div>
                <div className="box">
                    <img src={cargo} alt="cargo-icon"/>
                    <h1 className="text-white text-center text-2xl">Import Export</h1>
                    <p>
                        Our import/export trading operations are designed to ensure efficient, timely, and cost-effective delivery of commodities and products to our clients. Leveraging global networks to ensure smooth operations, our logistics solutions are tailored to meet the specific needs of our clients, ensuring seamless transportation, storage, and distribution of materials across various industries.
                    </p>
                </div>
                <div className="box">
                    <img src={nav} alt="navigation-icon"/>
                    <h1 className="text-white text-center text-2xl">Education Consulting</h1>
                    <p>
                        Our team of experts offers tailored advice on risk management, market analysis, and operational efficiency, ensuring that businesses are equipped with the insights and tools necessary for sustainable growth. Whether optimizing procurement processes or identifying new market opportunities, our consulting services are designed to deliver long-term value and success.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Business
