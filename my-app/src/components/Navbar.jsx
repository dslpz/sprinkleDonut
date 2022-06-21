import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsGithub, BsLinkedin,} from 'react-icons/bs'
import {Link} from 'react-scroll'




export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-300 text-black'>
        <div>
            {/* <img src={Logo} alt="Logo" style={{width: '350px'}}/> */}
        </div>
    {/*menu */}
    <ul className='hidden md:flex'>
            <li>  <Link to="home" smooth={true} duration={500}>
          Home
        </Link></li>
            <li> <Link to="about" smooth={true} duration={500}>
          About Me
        </Link></li>
            <li> <Link to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link></li>
            <li> <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
              </li>
            <li> <Link to="resume" smooth={true} duration={500}>
          Resume
        </Link></li>
    </ul>

    {/* hamburger*/}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />} 
    </div>
        
    {/* Mobile Menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-red-100 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About Me</li>
        <li className='py-6 text-4xl'>Portfolio</li>
        <li className='py-6 text-4xl'>Contact</li>
        <li className='py-6 text-4xl'>Resume</li>
    </ul>

    {/* Socials Icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
        <a className='flex justify-between items-center w-full text-black'
         href="/">
          LinkedIn <BsLinkedin size={30} />
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
        <a className='flex justify-between items-center w-full text-black'
         href="/">
          GitHub <BsGithub size={30} />
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
        <a className='flex justify-between items-center w-full text-black'
         href="/">
          Email <HiOutlineMail size={30} />
        </a>
      </li> 
    </ul> 
      </div>
    </div>
  )
}

export default Navbar