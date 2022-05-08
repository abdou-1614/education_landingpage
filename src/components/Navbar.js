import React, {useState} from 'react'
import {RiMenuFill} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../components/images/logo.png'
const Navbar = () => {
  const [toggel, setToggel] = useState(false)
  return (
    <nav className='flex justify-between items-center fixed top-0 left-1/2 bg-white1 -translate-x-1/2 backdrop-blur-lg py-2.5 px-3.5 max-w-[1440px] w-full z-50 shadow-primary '>
      <div>
        <img src={logo} alt='logo' />
      </div>
      {toggel && (
        <ul className='md:hidden active absolute right-8 left-8 top-[calc(100%+40px)] text-center bg-white1 rounded-lg shadow-md p-8' >
        <li className='item pb-2.5'>
        <a href='home'>Home</a>
        </li>
        <li className='item pb-2.5'>
        <a href='about'>About Us</a>
        </li>
        <li className='item pb-2.5'>
        <a href='course'>Course</a>
        </li>
          <li className='item pb-2.5'>
          <a href='blog'>Blog</a>
          </li>
          <li className='item'>
          <a href='contect'>Contact</a>
          </li>
    </ul>
      )}
      <button className='md:hidden bg-default h-[31px] w-[31px] rounded-lg ' onClick={() => setToggel(!toggel)} ><span>{toggel ? <AiOutlineClose className='text-white2 text-3xl font-[900] right-1'/> : <RiMenuFill className='text-white1 text-3xl font-[900]'/>}</span></button>
      <button className='btn btn-prime hidden md:block'>
        <p className='relative z-10'>Try For Free</p>
        <span className='anime'></span>
      </button>
    </nav>
  )
}

export default Navbar