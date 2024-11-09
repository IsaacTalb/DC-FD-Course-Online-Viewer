import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await api.get(`/courses/${id}`);
        setCourse(response.data.data);
      } catch (error) {
        console.error("Error fetching course details", error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return <p className="text-center text-muted">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title h3">
            {course.attributes.title}
          </h1>
          <p className="card-text">
            {course.attributes.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
