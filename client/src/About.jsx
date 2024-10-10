import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
     
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-teal-600">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to our application! We are dedicated to providing the best service to our users. Our team works tirelessly to ensure that you have a seamless experience while using our platform.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to connect people and help them achieve their goals. We believe in innovation, quality, and making a difference in the community. We are passionate about what we do, and we strive to bring you the best features and support.
          </p>
          <p className="text-gray-700 mb-4">
            Thank you for being a part of our journey! We look forward to serving you and enhancing your experience.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Customer Satisfaction</li>
              <li>Community Engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
