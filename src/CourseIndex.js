import React from 'react';
import './CourseIndex.css';
import { ChevronRight, Calendar, Home, Info, Mail } from 'lucide-react';

const CourseIndex = () => {
  const days = Array.from({ length: 11 }, (_, i) => ({
    day: i + 1,
    title: `Day ${i + 1}`,
    path: `./public/Day${i + 1}/index.html`,
    description: `Course content for Day ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Duck Cloud Course</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="index.html" className="flex items-center">
                    <Home className="w-4 h-4 mr-1" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html" className="flex items-center">
                    <Info className="w-4 h-4 mr-1" />
                    About
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Fullstack Developer Flow Course</h2>
          <p className="max-w-2xl mx-auto">
            Embark on your Full-Stack Developer journey with our comprehensive and interactive course materials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-indigo-600" />
            Course Content
          </h2>
          <div className="course-grid">
            {days.map((day) => (
              <a
                key={day.day}
                href={day.path}
                className="course-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3>{day.title}</h3>
                  <ChevronRight className="w-5 h-5 text-indigo-600" />
                </div>
                <p>{day.description}</p>
                <span className="view-content">View content</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Duck Cloud Course. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CourseIndex;
