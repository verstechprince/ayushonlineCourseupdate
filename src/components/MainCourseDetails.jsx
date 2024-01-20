import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://192.168.1.4:3001/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleEnrollClick = (courseItem) => {
    const courseId = courseItem._id || `${courseItem.title}-${courseItem.fees}`;
    localStorage.setItem(courseId, JSON.stringify({
      title: courseItem.title,
      fees: courseItem.fees,
      quantity:1,
      courseId : courseId,
    }));
  };

  return (
    <div>
      <section className="contents">
        {courses.map((courseItem, index) => (
          <div className="product-detail-bar" key={index}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                  <img src="design_img/acupressure-therapy.jpg" alt="Course Image" />
                </div>
                <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                  <h4 className="pr_name">{courseItem.title}</h4>
                  <p className="pr_rate">
                    Fees : <strong>Rs.{courseItem.fees}/-</strong>
                  </p>
                  <div className="pr_desc">
                    <p className="pr_head">Syllabus Overview:</p>
                    {courseItem.syllabus && courseItem.syllabus.length > 0 ? (
                      <ul>
                        {courseItem.syllabus.map(
                          (syllabusItem, syllabusIndex) => (
                            <li key={syllabusIndex}>{syllabusItem}</li>
                          )
                        )}
                      </ul>
                    ) : (
                      <div>not available</div>
                    )}
                    <p className="pr_head">Time Schedule:</p>
                    <ul>
                      <li>
                        <strong>Duration : </strong>
                        {courseItem.duration}
                      </li>
                      <li>
                        <strong>Class Schedule : </strong>
                        {courseItem.classSchedule}
                      </li>
                    </ul>
                    <Link
                      to="/cart"
                      id="add_to_cart"
                      className="btn btn-buy"
                      onClick={() => handleEnrollClick(courseItem)}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CourseDetails;
