import React from 'react';
import '../course/course.css';



const Course = ({ title, lessons, trials, price, imageUrl, link, isFree }) => {
  return (
    <div className="course-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="course-link">
        <div className="course-thumbnail">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="course-content">
          <h3 className="course-title">{title}</h3>
          <p className="course-details">
            {lessons} Lessons • {trials} {trials === 1 ? 'Trial' : 'Trials'}
          </p>
          <div className="course-price">
            {isFree ? (
              <span className="price-free">FREE</span>
            ) : (
              <span className="price-amount">₹ {price.toLocaleString()}</span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Course;
