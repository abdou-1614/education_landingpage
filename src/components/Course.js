import React from 'react'
import course1 from './images/course-1.jpg'
import {FaRegStar} from 'react-icons/fa'
import student from './images/student-icon.png'
import course2 from './images/course-2.jpg'
import course3 from './images/course-3.jpg'
import course4 from './images/course-4.jpg'
import course5 from './images/course-5.jpg'
import course6 from './images/course-6.jpg'
import courseI from './images/course-instructor-img.jpg'
const Course = () => {
  return (
    <section className='course py-4 px-8'>
      <p className='text-ultra-blue font-[700] text-lg md:text-xl text-center uppercase mb-5'>Our Online Courses</p>
      <h2 className='text-exford text-4xl font-[900] text-center mb-16 lg:leading-tight'>Find The Right Online Course For You</h2>
      <div className='course-grid grid grid-cols-1 gap-8 mb-16'>
        <div className='course-card'>
          <div className='course-banner'>
            <img src={course1} alt='course1' />
            <div className='course-tag'>
              <a href='#' className='bad orange'>Business</a>
              <a href='#' className='bad blue'>Marketing</a>
            </div>
          </div>
          <div className='course-content'>
            <h3>
              <a href='#'>Become product manager learn skills.</a>
            </h3>
            <div className='wrraperB'>
              <div className='author'>
                  <img src={courseI} alt="course
                  Instructor"/>
                  <a href='#'>Lillian Wals</a>
              </div>
              <div className='rating'>
                <FaRegStar/>
                <p>5.0 (2k)</p>
              </div>
            </div>
              <div className='wrraper'>
                  <div>$50.00</div>
                  <div className='enroll'>
                      <div className='icon-user'>
                          <img src={student} alt="student"/>
                      </div>
                      <p>600k</p>
                  </div>
              </div>
          </div>
        </div>

        <div className='course-card'>
          <div className='course-banner'>
            <img src={course2} alt='course1' />
            <div className='course-tag'>
              <a href='#' className='bad orange'>Business</a>
              <a href='#' className='bad blue'>Marketing</a>
            </div>
          </div>
          <div className='course-content'>
            <h3>
              <a href='#'>Fashion and luxury fashion in a changing.</a>
            </h3>
            <div className='wrraperB'>
              <div className='author'>
                  <img src={courseI} alt="course
                  Instructor"/>
                  <a href='#'>Lillian Wals</a>
              </div>
              <div className='rating'>
                <FaRegStar/>
                <p>4.7 (5k)</p>
              </div>
            </div>
              <div className='wrraper'>
                  <div>$80.00</div>
                  <div className='enroll'>
                      <div className='icon-user'>
                          <img src={student} alt="student"/>
                      </div>
                      <p>545k</p>
                  </div>
              </div>
          </div>
        </div>

        <div className='course-card'>
          <div className='course-banner'>
            <img src={course3} alt='course1' />
            <div className='course-tag'>
              <a href='#' className='bad orange'>Business</a>
              <a href='#' className='bad blue'>Marketing</a>
            </div>
          </div>
          <div className='course-content'>
            <h3>
              <a href='#'>Learning to write as a professional.</a>
            </h3>
            <div className='wrraperB'>
              <div className='author'>
                  <img src={courseI} alt="course
                  Instructor"/>
                  <a href='#'>Lillian Wals</a>
              </div>
              <div className='rating'>
                <FaRegStar/>
                <p>4.1 (3k)</p>
              </div>
            </div>
              <div className='wrraper'>
                  <div>$29.90</div>
                  <div className='enroll'>
                      <div className='icon-user'>
                          <img src={student} alt="student"/>
                      </div>
                      <p>317k</p>
                  </div>
              </div>
          </div>
        </div>

        <div className='course-card'>
          <div className='course-banner'>
            <img src={course4} alt='course1' />
            <div className='course-tag'>
              <a href='#' className='bad orange'>Business</a>
              <a href='#' className='bad blue'>Marketing</a>
            </div>
          </div>
          <div className='course-content'>
            <h3>
              <a href='#'>Improving accessibility of Your markdown.</a>
            </h3>
            <div className='wrraperB'>
              <div className='author'>
                  <img src={courseI} alt="course
                  Instructor"/>
                  <a href='#'>Lillian Wals</a>
              </div>
              <div className='rating'>
                <FaRegStar/>
                <p>4.8 (3.9k)</p>
              </div>
            </div>
              <div className='wrraper'>
                  <div>$49.90</div>
                  <div className='enroll'>
                      <div className='icon-user'>
                          <img src={student} alt="student"/>
                      </div>
                      <p>891k</p>
                  </div>
              </div>
          </div>
        </div>

        <div className='course-card'>
          <div className='course-banner'>
            <img src={course5} alt='course1' />
            <div className='course-tag'>
              <a href='#' className='bad orange'>Business</a>
              <a href='#' className='bad blue'>Marketing</a>
            </div>
          </div>
          <div className='course-content'>
            <h3>
              <a href='#'>Master query in a short period of time.</a>
            </h3>
            <div className='wrraperB'>
              <div className='author'>
                  <img src={courseI} alt="course
                  Instructor"/>
                  <a href='#'>Lillian Wals</a>
              </div>
              <div className='rating'>
                <FaRegStar/>
                <p>3.8 (1k)</p>
              </div>
            </div>
              <div className='wrraper'>
                  <div>$89.00</div>
                  <div className='enroll'>
                      <div className='icon-user'>
                          <img src={student} alt="student"/>
                      </div>
                      <p>204k</p>
                  </div>
              </div>
          </div>
        </div>

        <div className='course-card'>
          <div className='course-banner'>
            <img src={course6} alt='course1' />
            <div className='course-tag'>
              <a href='#' className='bad orange'>Business</a>
              <a href='#' className='bad blue'>Marketing</a>
            </div>
          </div>
          <div className='course-content'>
            <h3>
              <a href='#'>Business Intelligence analyst Course 2022.</a>
            </h3>
            <div className='wrraperB'>
              <div className='author'>
                  <img src={courseI} alt="course
                  Instructor"/>
                  <a href='#'>Lillian Wals</a>
              </div>
              <div className='rating'>
                <FaRegStar/>
                <p>4.9 (23k)</p>
              </div>
            </div>
              <div className='wrraper'>
                  <div>$199.00</div>
                  <div className='enroll'>
                      <div className='icon-user'>
                          <img src={student} alt="student"/>
                      </div>
                      <p>1.3M</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <button className='btn btn-prime py-3 px-6 lg:py-5 lg:px-11 '>
          <p className='relative z-10'>View All Course</p>
          <span className='anime'></span>
        </button>
    </section>
  )
}

export default Course