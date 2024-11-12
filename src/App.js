import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import Courses from './components/Courses';
import PaidCourses from './components/PaidCourses'; // Make sure this import is correct if you have this component
import Blog from './components/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/paid-courses" element={<PaidCourses />} /> {/* Add this only if PaidCourses is defined */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
