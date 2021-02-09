import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [showLinks,setShowLinks] = useState(false);
    const toggleNavbar = () => {
        setShowLinks(!showLinks);
    }
        return(
        <div className="nav-container">
            <div className="nav">
                <div className="nav-logo">
                    <h1>Hey</h1>
                </div>
                <div className={showLinks ? 'nav-links show-nav-links': 'nav-links'}>
                    <li><Link style={{textDecoration: 'none'}} to='/'>Home</Link></li>
                    <li><Link style={{textDecoration: 'none'}} to='/tours'>Tours</Link></li>
                    <li><Link style={{textDecoration: 'none'}} to='/testimonials'>Testimonials</Link></li>
                    <li><Link style={{textDecoration: 'none'}} to='/contact'>Contact Us</Link></li>
                </div>
                <div className="nav-toggle">
                    <i onClick={toggleNavbar} class="fas fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar;