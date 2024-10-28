
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';           // Tailwind CSS or other styles
import CourseIndex from './components/CourseIndex'; // Import your component

ReactDOM.render(
  <React.StrictMode>
    <CourseIndex />  {/* Render your CourseIndex component */}
  </React.StrictMode>,
  document.getElementById('root')
);
