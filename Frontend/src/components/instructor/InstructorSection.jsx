import React from 'react'
import '../instructor/InstructorSection.css'




const InstructorSection = () => {
  return (

    // flex
   <div className="instructor-body">

    <div className="left-side-instructor">
    <h2>Instructed Courses</h2>
    <p className='tutor-content'>Want Someone To instruct You? No Worries, Here We Introduce Our CourseMania's <br />
         Omnline Tutors To Assist & Guide You In Your Professional Path
    </p>
    </div>

    <div className="right-side-instructor">
   <button className='tutor-btn'>Find A Tutor</button>
    </div>
   </div>
  )
}

export default InstructorSection