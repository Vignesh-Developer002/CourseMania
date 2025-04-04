import React from 'react'
import '../TutotorDetail/TutorDetail.css'
import assets from '../../assets/asset'



const TutorDetail = ({name,img,design,courseCount}) => {
  return (

    // {/* flex */}
   <div className="tutor-detail">
   
    <div className="tutor-image">
         <img className ="tutor-images" src={img} alt="" />
    </div>
        {/* flex -column*/}
    <div className="tutor-body">
        <h3>{name}</h3>
         <p className='tutor-designation'>{design}</p>
          <a href="#" className="course-count"> {courseCount}</a>

          {/* flex */}
          <div className="tutor-rating-group">
             <img  className="single-star" src={assets.single_star} alt="" />

             {/* flex */}
             <div className="tutor-ratings">
                <span className='tutor-ratings-2'>4.9</span>
                <span className='No-of-users'>(76,335)</span>
             </div>
          </div>

    </div>

   </div>
  )
}

export default TutorDetail