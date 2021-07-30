import React, { useContext, useEffect, useState } from "react";
import CoursesContext from "../../Context/CoursesContext";
import "./course.css";
import PaymentPopup from "./PaymentPopup";

function Course(props) {
  const coursesState = useContext(CoursesContext);
  const courses = coursesState.courses;
  const [currentCourse, setCurrentCourse] = useState(false);
  const [displayPopup, setDisplaypopup] = useState(false);
  const [haveAccess, setHaveAccess] = useState(false);

  const getCurrentCourse = (courses, id) => {
    for (let i = 0; i < courses.length; i++)
      if (courses[i].id == id) return setCurrentCourse(courses[i]);
  };

  const checkPurchasedCourse = () => {
    let storage = localStorage.getItem("boughtCoursesId");
    if (storage) {
      let purchased = JSON.parse(localStorage.getItem("boughtCoursesId"));
      if (purchased == currentCourse.id) setHaveAccess(true);
    }
  };

  useEffect(() => {
    getCurrentCourse(courses, props.match.params.id);
    checkPurchasedCourse();
  }, [courses]);

  return (
    <>
      {displayPopup && (
        <PaymentPopup
          setDisplay={setDisplaypopup}
          id={currentCourse.id}
          setHaveAccess={setHaveAccess}
        />
      )}
      <div className="course-body">
        <div className="course-title">{currentCourse.title}</div>
        <div className="course-img">
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={currentCourse.thumbnailURL}
          />
        </div>
        {!haveAccess && (
          <>
            <div>Buy course to have full access</div>
            <div
              className="card-btn"
              style={{ marginTop: "20px" }}
              onClick={() => setDisplaypopup(true)}
            >
              Buy
            </div>
          </>
        )}
        {haveAccess &&
          currentCourse.videoLink.map((link) => (
            <iframe src={link} style={{ height: "auto", maxWidth: "500px" }} />
          ))}
      </div>
    </>
  );
}

export default Course;
