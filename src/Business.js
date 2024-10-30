import React from "react";
import trading from './images/trading.png';
import cargo from './images/logistic.png';
import building from './images/real-estate.png';
import nav from './images/nav.png';
import './css/Business.css';

function Business() {
    return (
        <div id='business' className="p-5" style={{backgroundColor: '#021d68'}}>
            <h1 className="text-4xl text-white pl-5 pr-5 pt-5 pb-7">Our businesses</h1>
            <div className="business">
                <div className="box">
                    <img src={trading} alt="trading-icon"/>
                    <h1 className="text-white text-center text-2xl">Investment</h1>
                    <p>We invest in a wide range of assets, including real estates, stocks, ETFs, startups, and commodities such as aluminum, copper, steel, and select agricultural products. Our diversified portfolio allows us to meet the varied needs of our clients while maintaining a strong presence in global markets.</p>
                </div>
                <div className="box">
                    <img src={building} alt="building-icon"/>
                    <h1 className="text-white text-center text-2xl">Real Estate Development</h1>
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
                    <h1 className="text-white text-center text-2xl">Consulting</h1>
                    <p>
                        Our team of experts offers tailored advice on risk management, market analysis, and operational efficiency, ensuring that businesses are equipped with the insights and tools necessary for sustainable growth. Whether optimizing procurement processes or identifying new market opportunities, our consulting services are designed to deliver long-term value and success.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Business
