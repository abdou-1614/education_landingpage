import React from 'react'
import aboutBg from './images/about-img-bg.png'
import aboutImg from './images/about-img.png'
import banner1 from './images/banner-aliment-icon-1.png'
import banner2 from './images/banner-aliment-icon-2.png'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
const About = () => {
  return (
    <section className='about py-4 px-10 overflow-hidden bg-culur'>
      <div className='left'>
        <div className='img-box'>
          <img src={aboutBg} alt='aboutBg' className='m-auto max-w-full w-auto'/>
          <img src={aboutImg} alt='aboutImg' className='m-auto max-w-full w-auto img'/>
          <img src={banner1} alt="banner1" width={220} className='top-[130px] z-30 right-0'/>
          <img src={banner2} alt="banner" width={195} className='hidden'/>
        </div>
      </div>
      <div className='right pt-10 '>
        <p className='mb-5'>About Us</p>
        <h2 className='mb-8'>We Have Best Online Education</h2>
        <p className='mb-5'>Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa vel, porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <ul className='mb-10 about-ul'>
            <li className='flex items-center gap-3 mb-7'>
              <IoMdCheckmarkCircleOutline className='text-default text-[30px]'/>
              <p className='text-exford font-[500] text-[15px] text-left leading-relaxed'>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>
            <li className='flex items-center gap-3 mb-7'>
              <IoMdCheckmarkCircleOutline className='text-default text-[30px]'/>
              <p className='text-exford font-[500] text-[15px] text-left leading-relaxed'>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>
            <li className='flex items-center gap-3 mb-7'>
              <IoMdCheckmarkCircleOutline className='text-default text-[30px]'/>
              <p className='text-exford font-[500] text-[15px] text-left leading-relaxed'>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>
          </ul>
          <button className='btn btn-prime py-3 px-6 lg:py-5 lg:px-11 '>
          <p className='relative z-10'>Explore More</p>
          <span className='anime'></span>
        </button>
      </div>
    </section>
  )
}

export default About