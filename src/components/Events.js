import React from 'react'
import eventimg from '../components/images/event-img.jpg'
import {BsFillPlayCircleFill} from 'react-icons/bs'
const Events = () => {
  return (
    <section className='py-[15px] px-[40px] bg-culur'>
        <div className='relative max-w-max mb-10 '>
            <div className=''>
                <img src={eventimg} alt='event' className='w-auto rounded-[8px] max-w-full' />
            </div>
            <button className='absolute right-0 bottom-[100px] py-[30px] px-[40px] bg-default flex items-center gap-5 rounded-[8px] shadow-lg shadow-default'>
              <div className='rounded-full shadow-md shadow-transparent'>
              <BsFillPlayCircleFill className=' block text-[50px] -m-[8px] text-white1'/>
              </div>
              <p className='text-white1 text-[20px] font-[700]'>Watch Us !</p>
            </button>
        </div> 
        <div className='ev-right'>
          <p className='text-ultra-blue font-[700] text-lg md:text-xl text-center uppercase mb-5'>Our Events</p>
          <h2 className='text-exford text-4xl font-[900] text-center lg:leading-tight mb-10'>Join Our Upcoming Events</h2>
          <div className='grid grid-cols-1 gap-10'>
            <div className='event-card'>
              <div className='content-left'>
                  <p className='day'>28</p>
                  <p className='month'>Feb, 2022</p>
              </div>
              <div className='content-right'>
                <div className='should'>
                  <p className='time'>10:30am To 2:30pm</p>
                  <p className='count'>Poland</p>
                </div>
                 <a className='e-name'>Business creativity workshops</a>
              </div>

            </div>
            <div className='event-card'>
              <div className='content-left'>
                  <p className='day'>15</p>
                  <p className='month'>Mar, 2022</p>
              </div>
              <div className='content-right'>
                <div className='should'>
                  <p className='time'>10:30am To 2:30pm</p>
                  <p className='count'>Poland</p>
                </div>
                 <a href='#' className='e-name'>Street Performance: Call for Art.</a>
              </div>

            </div>
            <div className='event-card'>
              <div className='content-left'>
                  <p className='day'>20</p>
                  <p className='month'>May, 2022</p>
              </div>
              <div className='content-right'>
                <div className='should'>
                  <p className='time'>10:30am To 2:30pm</p>
                  <p className='count'>Poland</p>
                </div>
                 <a className='e-name'>Digital transformation conference</a>
              </div>

            </div>
          </div>
        </div>
    </section>
  )
}

export default Events