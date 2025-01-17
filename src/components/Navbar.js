import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='home' className='logo'>
                    <img src={process.env.PUBLIC_URL + '/HIF.png'} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'black' }} />)
                        : (<FaBars size={30} style={{ color: 'black' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>About us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='business' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>What we do</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='real-estate' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>Real Estate & Golden Visa</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='import-export' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>Import Export</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar