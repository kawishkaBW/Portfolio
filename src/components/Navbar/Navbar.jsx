import React from 'react'
import './Navbar.css'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {

    const handleBlogClick = () => {
        alert("The blog is under maintenance.");
      };

  return (
    <div className='nav-wrapper' >

    {/* 
    Nav bar divide into 2 sections:
    1 - Left side :- name and day/night button 
    2 - Right side :- nav bar list and contact button
  */}
       
       
        <div className='nav-leftSide' >
            <ScrollLink to='home' spy={true} offset={-140} className='nav-link'><RouterLink to='/' className='nav-link'><div className='nav-name'>Kawishka</div></RouterLink></ScrollLink>
            
            <span>toggle</span>
        </div>

        <div className='nav-rightSide' >
            <div className='nav-list'>
                <ul>
                    <ScrollLink to='resume' spy={true} offset={-140} className='nav-link'><RouterLink to='/' className='nav-link'><li>ABOUT</li></RouterLink></ScrollLink>
                    <ScrollLink to='service' spy={true} offset={-15} className='nav-link'><RouterLink to='/' className='nav-link'><li>SERVICES</li></RouterLink></ScrollLink>
                    <ScrollLink to='portfolio' spy={true} offset={-90} className='nav-link'><RouterLink to='/' className='nav-link'><li>PORFOLIO</li></RouterLink></ScrollLink>
                    <li onClick={handleBlogClick}>BLOG</li>
                </ul>
            </div>
            <ScrollLink to='contact' spy={true} offset={-70} className='nav-link'><RouterLink to='/' className='nav-link'>
            <button type="button" className="btn btn-outline-warning"
                            style={{
                                    borderRadius: '30px',
                                    border: 'none',                                    
                                    fontSize: '22px',
                                    padding: '6px',
                                }}
            >
                Contact
            </button>
            </RouterLink>
            </ScrollLink>
            
            
        </div>
    </div>
  )
}

export default Navbar