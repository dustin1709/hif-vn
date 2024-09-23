import React from "react";
import trading from './images/trading.png';
import cargo from './images/logistic.png';
import code from './images/code.png';
import nav from './images/nav.png';
import './css/Business.css';

function Business() {
    return (
        <div id='business' className="p-5" style={{backgroundColor: '#8c8e91'}}>
            <h1 className="text-4xl text-white p-5">Our businesses</h1>
            <div className="business">
                <div className="box">
                    <img src={trading} alt="trading-icon"/>
                    <h1 className="text-white text-center text-2xl">Trading</h1>
                    <p>We trade a wide range of assets, including stocks, ETFs, and commodities such as aluminum, copper, steel, and select agricultural products. Our diversified portfolio allows us to meet the varied needs of our clients while maintaining a strong presence in global markets.</p>
                </div>
                <div className="box">
                    <img src={code} alt="code-icon"/>
                    <h1 className="text-white text-center text-2xl">Software Development</h1>
                    <p>
                        We aim to reduce costs for our clients by offering software development services, which we either distribute or develop in-house. This approach allows us to provide high-quality solutions while ensuring efficiency and affordability.
                        <br />
                        - Warehouse and fleet management software
                        <br />
                        - Ecommerce
                        <br />
                        - Software testing
                        <br />
                        - CRM
                    </p>
                </div>
                <div className="box">
                    <img src={cargo} alt="cargo-icon"/>
                    <h1 className="text-white text-center text-2xl">Logistic</h1>
                    <p>
                        Our logistics operations are designed to ensure efficient, timely, and cost-effective delivery of commodities and products to our clients. Leveraging global networks to ensure smooth operations, our logistics solutions are tailored to meet the specific needs of our clients, ensuring seamless transportation, storage, and distribution of materials across various industries.
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
