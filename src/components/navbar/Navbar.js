import React,{useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {GiUltrasound} from 'react-icons/gi'
import './Navbar.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><GiUltrasound/>  Chalk And Talk </span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact us</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon'/>):(<HiOutlineMenuAlt4 className='icon'/>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar