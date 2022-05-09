import React from 'react'
import shap1 from './images/shape-1.png'
import shap2 from './images/shape-2.png'
import shap3 from './images/shape-3.png'
import shap4 from './images/shape-4.png'
import banner from './images/banner-line.png'
import bannerBg from './images/banner-img-bg.png'
import bannerImg from './images/banner-img.png'
import aliment1 from './images/banner-aliment-icon-1.png'
import aliment2 from './images/banner-aliment-icon-2.png'
import aliment3 from './images/banner-aliment-icon-3.png'
import aliment4 from './images/banner-aliment-icon-4.png'
const Home = () => {
  return (
    <section className='relative mt-[70px] py-[15px] px-[40px] home'>
      <div className='absolute top-[14%] left-[8%]  '>
        <img src={shap1} alt='shap' width={70} />
      </div>
      <div className='absolute top-[600px] left-[80px] '>
        <img src={shap2} alt='shap' width={55} />
      </div>
      <div className='absolute top-1/4 right-0 '>
        <img src={shap3} alt='shap' width={120} />
      </div>
      <div className='absolute top-[570px] right-[110px] '>
        <img src={shap4} alt='shap' width={30} />
      </div>
      <div className='relative z-10 mb-[60px]'>
        <p className='text-ultra-blue font-[700] text-lg text-center uppercase mb-5'>Welcome To Online Coaching</p>
        <h1 className='text-exford text-4xl font-[900] text-center mb-10'>Get Class From Top <br/>
        <span className='inline-block relative'>Instructor<img src={banner} alt='banner' className='absolute -bottom[5px] left-0 width-full' /></span>
        </h1>
        <p className='text-sonic text-[16px] leading-6 max-w-[500px] text-center m-auto mb-[30px] '>Integer in magna in est ultrices bibendum eget enim et dui imperdiet faucibus. Fusce eu tristique felis.</p>
      </div>
      <div className='flex items-center justify-center flex-wrap gap-8'>
      <button className='btn btn-prime md:block py-3 px-6 lg:py-5 lg:px-11 '>
        <p className='relative z-10'>Explore Courses</p>
        <span className='anime'></span>
      </button>
      <button className='btn-secondary btn md:block py-3 px-6 lg:py-5 lg:px-11'>
        <p className='relative z-10'>Contact Us</p>
        <span className='anime'></span>
      </button>
      </div>
      <article className='right'>
        <div className='box'>
          <img src={bannerBg} alt='banner' className='bg-shape'/>
          <img src={bannerImg} alt='bannerimg' className='banner'/>
          <img src={aliment1} alt='aliment1' width={250} className='top-[200px] left-[20px] z-10 drop-shadow-3xl'/>
          <img src={aliment2} alt='aliment2' width={240} className='hidden z-10 drop-shadow-3xl'/>
          <img src={aliment3} alt='aliment3' width={195} className='hidden z-10 drop-shadow-3xl'/>
          <img src={aliment4} alt='aliment4' className='top-[60px] right-5 drop-shadow-[0_8px_30px_hsla(350,100%,68%,0.5)] z-10'/>
        </div>
      </article>
    </section>
  )
}

export default Home