import React from "react";
import "./CourseCard.scss";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-card__img" />
      <div className="course-card__body">
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__desc">{course.description}</p>
        <button className="course-card__button">Acessar curso</button>
      </div>
    </div>
  );
}

export default CourseCard; 