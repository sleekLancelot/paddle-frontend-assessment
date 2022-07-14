import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../logo'

import './Navbar.scss'

const NavBar = ({ transBG = true }) => {
    const navLinks = [
        {
            label: 'About Us',
            link: 'about',
            class: '',
            style: {},
        },
        {
            label: 'Blog',
            link: 'blog',
            class: '',
            style: {},
        }
    ]
  return (
    <div className='nav'>
        <Logo transBG={transBG} />

        <div className={`links ${!transBG ? 'plainBG' : ''}`}>
            {
                navLinks?.map( (link,index) => (
                    <NavLink 
                        to={`/${link.link}`}
                        key={index}
                        className={`link ${link.class}`}
                        style={
                            ({ isActive }) =>
                            isActive ? { color :'#FF00F7'} : undefined
                        }
                    >
                        {link.label}
                    </NavLink>
                ))
            }
            <NavLink 
                to={`#`}
                className={`link button`}>
                Contact Us
            </NavLink>
        </div>
    </div>
  )
}

export { NavBar }