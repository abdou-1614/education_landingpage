import React from 'react'
import feature1 from '../components/images/feature-icon-1.png'
import feature2 from '../components/images/feature-icon-2.png'
import feature3 from '../components/images/feature-icon-3.png'
import featureImg from '../components/images/coure-features-img.jpg'
const Features = () => {
  return (
    <section className='bg-exford'>
       <div className='py-[15px] px-[40px] e-left'>
       <p className='text-ultra-blue font-[700] text-lg md:text-xl text-center uppercase mb-5 mt-5'>Core Features</p>
          <h2 className='text-white1 text-4xl font-[900] text-center lg:leading-tight mb-10'>See What Our Mission Are</h2>
          <ul>
            <li className='fea-items'>
              <div className=' h-[65px] w-[65px] flex items-center justify-center rounded-[8px] item1'>
                <img src={feature1} alt='feature1' />
              </div>
              <div className='wrraper'>
                <h3 className='text-white1 text-[30px] font-[700] mb-3'>Student Life</h3>
                <p className='text-[hsl(231,100%,94%)] text-[16px] leading-tight'>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
              </div>
            </li>
            <li className='fea-items'>
              <div className=' h-[65px] w-[65px] flex items-center justify-center rounded-[8px] item2'>
                <img src={feature2} alt='feature1' />
              </div>
              <div className='wrraper'>
                <h3 className='text-white1 text-[30px] font-[700] mb-3'>Best Online Class</h3>
                <p className='text-[hsl(231,100%,94%)] text-[15px] leading-tight'>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
              </div>
            </li>
            <li className='fea-items'>
              <div className='h-[65px] w-[65px] flex items-center justify-center rounded-[8px] item3'>
                <img src={feature3} alt='feature1' />
              </div>
              <div className='max-w-[100%-85px]'>
                <h3 className='text-white1 text-[30px] font-[700] mb-3'>24x7 Program</h3>
                <p className='text-[hsl(231,100%,94%)] text-[15px] leading-tight mb-10'>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
              </div>
            </li>
          </ul>
       </div>
       <div className='h-[500px]'>
          <img className='w-full h-full object-cover' src={featureImg} alt='featureImg'/>
       </div>
    </section>
  )
}

export default Features