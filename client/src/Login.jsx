// src/components/Auth.js
import React, { useState } from 'react';
import axios from 'axios';
 

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    

      if (isSignUp) {
        response = await axios.post('http://localhost:4000/api/signup', formData , {headers : {
            "Content-Type" : 'application/json'
        }});
      } else {
        response = await axios.post('http://localhost:4000/api/login', {
          email: formData.email,
          password: formData.password,
        },{headers : {
            "Content-Type" : 'application/json'
        }});
      }
    } catch (error) {
      console.error('Operation failed:', error);
      setError(error.response?.data?.message || 'An error occurred.'); 
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
    });
    setError(null); // Reset error on form toggle
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="123-456-7890"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}
            <button
              type="button"
              onClick={toggleForm}
              className="text-teal-600 hover:underline ml-1"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
