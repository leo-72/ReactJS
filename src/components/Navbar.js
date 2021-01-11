import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
            <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            Tutorial NPS 
                            <i className="fa fa-bolt" />
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/beranda' className='nav-links' onClick={closeMobileMenu}>
                                    Beranda
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link 
                                    to='/tutorial' 
                                    className='nav-links' 
                                    onClick={closeMobileMenu}
                                >
                                    Tutorial
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link 
                                    to='/kontak' 
                                    className='nav-links' 
                                    onClick={closeMobileMenu}
                                >
                                    Kontak
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to='/daftar' 
                                    className='nav-links-mobile' 
                                    onClick={closeMobileMenu}
                                >
                                    Daftar
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>DAFTAR</Button>}
                    </div>
                </nav>
            </>
    )
}

export default Navbar
