import React, { useEffect, useState } from 'react';
import api from '../api';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses'); // Make sure this matches your API endpoint
        console.log("Fetched Courses:", response.data); // Log data to check if it’s coming through
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      {courses.length > 0 ? (
        courses.map(course => (
          <div key={course.id}>
            <h2>{course.attributes.title}</h2>
            <p>{course.attributes.description}</p>
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default Courses;
