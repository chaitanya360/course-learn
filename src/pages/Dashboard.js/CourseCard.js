import React from "react";

function CourseCard({ course, onClick }) {
  return (
    <div className="card" onClick={() => onClick(course.id)}>
      <div className="card-overlay" />
      <div className="card-thumb">
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={course.thumbnailURL}
        />
      </div>
      <div className="card-title">{course.title}</div>
      <div className="card-footer">
        <div className="card-price">{course.price}</div>
        <div className="card-btn">Buy </div>
      </div>
    </div>
  );
}

export default CourseCard;
