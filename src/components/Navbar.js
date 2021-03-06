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
      <article className='hidden md:block static bg-trasparent scale-100'>
        <ul className='flex items-center gap-3 md:gap-9 lg:gap-14 font-semibold text-lg lg:text-xl '>
        <li className='transition delay-50 ease hover:text-default'>
        <a href='home'>Home</a>
        </li>
        <li className='transition delay-50 hover:text-default'>
        <a href='about'>About Us</a>
        </li>
        <li className='transition delay-50 hover:text-default'>
        <a href='course'>Course</a>
        </li>
          <li className='transition delay-50 hover:text-default'>
          <a href='blog'>Blog</a>
          </li>
          <li className='transition delay-50 hover:text-default'>
          <a href='contect'>Contact</a>
          </li>
        </ul>
      </article>
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
      <button className='md:hidden bg-default h-[31px] -translate-x-0.5 w-[32px] rounded-lg ' onClick={() => setToggel(!toggel)} ><span>{toggel ? <AiOutlineClose className='text-white2 translate-x-px text-3xl font-[900] right-1'/> : <RiMenuFill className='text-white1 translate-x-px text-3xl font-[900]'/>}</span></button>
      <button className='btn btn-prime hidden md:block py-3 px-6 lg:py-5 lg:px-11 '>
        <p className='relative z-10'>Try For Free</p>
        <span className='anime'></span>
      </button>
    </nav>
  )
}

export default Navbar