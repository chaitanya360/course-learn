import React, { useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import CoursesContext from "../../Context/CoursesContext";
import UserContext from "../../Context/UserContext";
import CourseCard from "./CourseCard";
import "./dashboard.css";

function Dashboard(props) {
  const history = useHistory();

  const user = useContext(UserContext).user;

  const coursesState = useContext(CoursesContext);
  const courses = coursesState.courses;
  const handleOnCourseClick = (id) => {
    history.push(`course/${id}`);
  };

  return user ? (
    courses ? (
      <>
        <div className="card-container">
          {courses.map((course) => (
            <CourseCard course={course} onClick={handleOnCourseClick} />
          ))}
        </div>
      </>
    ) : (
      <div>Loading...</div>
    )
  ) : (
    <Redirect to="/login" />
  );
}

export default Dashboard;
