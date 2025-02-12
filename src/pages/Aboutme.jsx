import React from 'react';

const AboutMe = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-6">
        Hello! I'm John Doe, a web developer passionate about creating modern web applications.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills & Technologies</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-6">
        <li>JavaScript (React, Node.js)</li>
        <li>HTML & CSS</li>
        <li>Python</li>
        <li>Database Management (MySQL, MongoDB)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hobbies</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-6">
        <li>Programming</li>
        <li>Gaming</li>
        <li>Photography</li>
        <li>Traveling</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact</h2>
      <p className="text-lg text-gray-700">Email: johndoe@example.com</p>
    </div>
  );
};

export default AboutMe;
