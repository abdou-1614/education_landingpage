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
    <section className='relative mt-[70px] py-[15px] px-[40px] md:px-[30px] home md:grid md:grid-cols-2 md:items-center'>
      <div className='absolute top-[14%] left-[8%] sm:w-[100px]'>
        <img src={shap1} alt='shap' width={70} />
      </div>
      <div className='absolute top-[600px] left-[80px] '>
        <img src={shap2} alt='shap' width={55} />
      </div>
      <div className='absolute top-1/4 right-0 sm:w-[250px]'>
        <img src={shap3} alt='shap' width={120} />
      </div>
      <div className='absolute top-[570px] right-[110px] '>
        <img src={shap4} alt='shap' width={30} />
      </div>
      <div className='relative z-10 mb-[60px]'>
        <p className='text-ultra-blue font-[700] text-lg md:text-xl text-center uppercase mb-5'>Welcome To Online Coaching</p>
        <h1 className='text-exford text-4xl lg:text-6xl font-[900] text-center mb-10 md:mb-14 lg:leading-tight	'>Get Class From <br/> Top
        <span className='inline-block relative'>&nbsp;Instructor<img src={banner} alt='banner' className='absolute -bottom[5px] left-0 width-full' /></span>
        </h1>
        <p className='text-sonic text-[16px] md:text-xl leading-6 max-w-[500px] text-center m-auto mb-[30px] md:mb-[40px] '>Integer in magna in est ultrices bibendum eget enim et dui imperdiet faucibus. Fusce eu tristique felis.</p>
        <div className='flex items-center justify-center flex-wrap gap-8'>
        <button className='btn btn-prime py-3 px-6 lg:py-5 lg:px-11 '>
          <p className='relative z-10'>Explore Courses</p>
          <span className='anime'></span>
        </button>
        <button className='btn-secondary btn py-3 px-6 lg:py-5 lg:px-11'>
          <p className='relative z-10'>Contact Us</p>
          <span className='anime'></span>
        </button>
        </div>
      </div>
      <article className='right'>
        <div className='box'>
          <img src={bannerBg} alt='banner' className='bg-shape'/>
          <img src={bannerImg} alt='bannerimg' className='banner'/>
          <img src={aliment1} alt='aliment1' width={190} className='top-[150px] sm:top-[220px] lg:w-[250px] md:w-[235px] sm:w-[225px] md:top-[180px] left-[5px] z-10 drop-shadow-3xl'/>
          <img src={aliment2} alt='aliment2' width={180} className='z-10 lg:w-[240px] md:w-[230px] sm:w-[225px] drop-shadow-3xl top-[230px] sm:top-[300px] md:top-[280px] right-[5px] sm:right-[10px] md:right-[50px] '/>
          <img src={aliment3} alt='aliment3' width={125} className='z-10 lg:w-[190px] md:w-[180px] sm:w-[170px] drop-shadow-3xl top-[270px] sm:top-[380px] md:top-[360px] left-0'/>
          <img src={aliment4} alt='aliment4' className='top-[100px] right-[50px] drop-shadow-[0_8px_30px_hsla(350,100%,68%,0.5)] z-10'/>
        </div>
      </article>
    </section>
  )
}

export default Home