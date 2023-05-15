import React from 'react'
import './TopNav.css';
import { Link,NavLink } from 'react-router-dom';

export const TopNav = () => {
    return (
        <div className='navbar'>
            
             
            
            
            <div className='rightmaincontainer'>
                {/* <NavLink> */}
                    <Link to='/home' className='inse'>Home</Link>
                    <Link to='/about' className='inse'>About</Link>
                    <Link to='/Projects' className='inse'>Projects</Link>
                    <Link to='/Expreinces' className='inse'>Experience</Link>
                    <Link to='/Contact' className='inse'>Contact</Link>
                {/* </NavLink> */}
            </div>
        </div>
    )
}
export default TopNav;