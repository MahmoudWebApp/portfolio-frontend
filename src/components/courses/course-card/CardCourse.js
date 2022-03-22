import React from "react";
import "./CardCourse.scss";
import coursesImg from '../../../img/hr.png';

const CardCourse = ({title,content}) => {
 
  return (
      <div className="card-course__box">
        <div className="card-course__img">
            <img src={coursesImg} alt="courses" />
        </div>
        <div className="card-course__content">
          <h3>{title}</h3>
          <div className="card-course__content-info">
            <h4>{content.name}</h4>
            <h5>{content.data}</h5>
           <p>{content.description}</p> 
          </div>
        </div>
      </div>
    
  );
};

export default CardCourse;
