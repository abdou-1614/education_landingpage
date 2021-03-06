import React from 'react'
import {Navbar, Home, About, Course, Events, Features, Category, Instructor, Testimonials, Contact, Blog, Footer} from './components'
function App() {
  return (
    <div className='bg-white1 max-w-[1440px] m-auto overflow-hidden ' >
      <Navbar/>
      <Home/>
      <Category/>
      <About/>
      <Course/>
      <Events/>
      <Features/>
    </div>
  );
}

export default App;
