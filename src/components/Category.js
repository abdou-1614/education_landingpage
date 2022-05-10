import React from 'react'
import course1 from './images/course-category-icon-1-w.png'
import courseA1 from './images/course-category-icon-1.png'
import course2 from './images/course-category-icon-2-w.png'
import courseA2 from './images/course-category-icon-2.png'
import course3 from './images/course-category-icon-3-w.png'
import courseA3 from './images/course-category-icon-3.png'
import course4 from './images/course-category-icon-4-w.png'
import courseA4 from './images/course-category-icon-4.png'
import course5 from './images/course-category-icon-5-w.png'
import courseA5 from './images/course-category-icon-5.png'
import course6 from './images/course-category-icon-6-w.png'
import courseA6 from './images/course-category-icon-6.png'
const Category = () => {
  return (
    <section className='py-3.5 px-10'>
      <p className='text-ultra-blue font-[700] text-lg md:text-xl text-center uppercase mb-5'>Course Category</p>
      <h2 className='text-center leading-tight font-[700] text-[35px] text-exford mb-10 '>Explore Popular Courses</h2>
      <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <li className='category '>
          <div>
            < img className='cat-icon hove' src={course1} alt='course1'/>
            < img className='cat-icon default' src={courseA1} alt='courseA1'/>
          </div>
          <div>
            <h3><a href='#' className='text-exford text-[22px] font-[700] '>Learn Data Science</a></h3>
            <p className='text-sonic text-[15px] font-semibold title'>Data is Everything</p>
          </div>
        </li>
        <li className='category'>
          <div>
            < img className='cat-icon hove' src={course2} alt='course2' />
            < img className='cat-icon default' src={courseA2} alt='courseA2' />
          </div>
          <div>
            <h3><a href='#' className='text-exford text-[22px] font-[700]'>Business Strategy</a></h3>
            <p className='text-sonic text-[15px] font-semibold title'>Improve your business</p>
          </div>
        </li>
        <li className='category'>
          <div>
            < img className='cat-icon hove' src={course3} alt='course2' />
            < img className='cat-icon default' src={courseA3} alt='courseA2' />
          </div>
          <div>
            <h3><a href='#' className='text-exford text-[22px] font-[700]'>Learn Art & Design</a></h3>
            <p className='text-sonic text-[15px] font-semibold title'>Fun & Challenging</p>
          </div>
        </li>
        <li className='category'>
          <div>
            < img className='cat-icon hove' src={course4} alt='course4' />
            < img className='cat-icon default' src={courseA4} alt='courseA4' />
          </div>
          <div>
            <h3><a href='#' className='text-exford text-[22px] font-[700]'>Learn Lifestyle</a></h3>
            <p className='text-sonic text-[15px] font-semibold title'>New Skills, New You</p>
          </div>
        </li>
        <li className='category'>
          <div>
            < img className='cat-icon hove' src={course5} alt='course5' />
            < img className='cat-icon default' src={courseA5} alt='courseA5' />
          </div>
          <div>
            <h3><a href='#' className='text-exford text-[22px] font-[700] '>Learn Marketing</a></h3>
            <p className='text-sonic text-[15px] font-semibold title'>Improve your business</p>
          </div>
        </li>
        <li className='category'>
          <div>
            < img className='cat-icon hove' src={course6} alt='course6' />
            < img className='cat-icon default' src={courseA6} alt='courseA6' />
          </div>
          <div>
            <h3><a href='#' className='text-exford text-[22px] font-[700]'>Learn Finance</a></h3>
            <p className='text-sonic text-[15px] font-semibold title'>Fun & Challenging</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Category