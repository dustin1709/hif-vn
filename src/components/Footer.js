import React from 'react';
import './Footer.css';
import { FaCopyright } from 'react-icons/fa';
import soil from '../images/halong.jpg';

function Footer() {
    return (
        <div className='footer pl-5 pr-5 pt-6 pb-2' style={{
            backgroundImage: `url(${soil})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
            }}>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#business'>What we do</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#real-estate'>Real Estate & Golden Visa</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#import-export'>Import Export</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <hr/>
                    <p className='pt-5 flex items-center gap-[12px]'><FaCopyright /> {new Date().getFullYear()} HIF CONSULTING COMPANY LIMITED. Công ty TNHH Tư Vấn HIF. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer