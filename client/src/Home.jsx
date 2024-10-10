import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-4">
          Welcome to Our Site!
        </h1>
        <p className="text-gray-700 text-lg text-center mb-4">
          Discover a world of amazing products and services tailored just for you. 
          Explore our offerings and find what you need today!
        </p>
        <div className="flex justify-center">
          <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-teal-600 text-center mb-4">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Feature Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-2">Feature One</h3>
            <p className="text-gray-600">
              Description of feature one. It can help you with many tasks and improve your experience.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-2">Feature Two</h3>
            <p className="text-gray-600">
              Description of feature two. Enhance your productivity and achieve more with less effort.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-2">Feature Three</h3>
            <p className="text-gray-600">
              Description of feature three. Seamlessly integrate with your current workflow.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-teal-600 text-center mb-4">
          Join Us Today!
        </h2>
        <p className="text-gray-700 text-lg text-center mb-4">
          Sign up now to start enjoying all the benefits we have to offer. 
          It's quick and easy!
        </p>
        <div className="flex justify-center">
          <Link to="/login" >
          <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200">
            Sign Up
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
