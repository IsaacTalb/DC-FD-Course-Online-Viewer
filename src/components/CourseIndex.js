import React from 'react';
import { ChevronRight, Calendar, Home, Info, Mail } from 'lucide-react';

const CourseIndex = () => {
  const days = Array.from({ length: 11 }, (_, i) => ({
    day: i + 1,
    title: `Day ${i + 1}`,
    path: `./public/Day${i + 1}/index.html`,
    description: `Course content for Day ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Duck Cloud Course</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="index.html" className="flex items-center text-gray-600 hover:text-indigo-600">
                    <Home className="w-4 h-4 mr-1" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html" className="flex items-center text-gray-600 hover:text-indigo-600">
                    <Info className="w-4 h-4 mr-1" />
                    About
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="flex items-center text-gray-600 hover:text-indigo-600">
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
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Duck Cloud Course</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Embark on your cloud computing journey with our comprehensive course materials
          </p>
        </section>

        {/* Course Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-indigo-600" />
            Course Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((day) => (
              <a
                key={day.day}
                href={day.path}
                className="group block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{day.title}</h3>
                  <ChevronRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
                <p className="text-gray-600">{day.description}</p>
                <div className="mt-4 text-sm text-indigo-600 group-hover:underline">
                  View content
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Duck Cloud Course. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CourseIndex;