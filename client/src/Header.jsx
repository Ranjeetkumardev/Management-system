import React, { useState } from 'react'
import axios from "axios"
import { Search } from "lucide-react"
import { Link } from 'react-router-dom'
import Model from './Model'
import { toast } from 'sonner'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    quantity: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title) {
      newErrors.title = 'Title is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.quantity) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(formData.quantity)) {
      newErrors.quantity = 'Quantity must be a number';
    }
    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(formData.price)) {
      newErrors.price = 'Price must be a number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Post request using Axios
        const response = await axios.post('http://localhost:4000/additem', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Check if the response status is within the successful range
        if (response.status === 200 || response.status === 201) {
          console.log('Form data submitted successfully:', response.data);

          // Optionally close the modal after successful submission
          setFormData({
            title: "",
            category: "",
            quantity: "",
            price: ""
          });
          toast.success('Items is Added Successfully..',{
            position: 'top-right',
            className: 'bg-teal-500',
          })
          closeModal();
        } else {
          toast.error('Failed to submit data');
          throw new Error('Failed to submit data');
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    }
  };

  return (
    <div className="w-full flex justify-between items-center px-8 bg-teal-600 p-2 sticky top-0">
      <Link to="/">
        <div className="">
          <img src="https://static.vecteezy.com/system/resources/previews/017/764/451/non_2x/universal-black-and-white-logo-with-the-image-of-a-sports-man-good-for-the-gym-vector.jpg" alt="Gym LOGO" className='w-[40px] h-[40px] bg-transparent object-cover' />
        </div>
      </Link>
      <div className="flex space-x-6 items-end">
        <Link to="/search">
          <p className='p-1 hover:text-teal-200 rounded-md'><Search /></p>
        </Link>
        <div onClick={openModal} className='p-1 hover:text-teal-200 rounded-md cursor-pointer'>
          <Link to="/additem">
            <p>Add Items</p>
          </Link>
        </div>
        <Link to="/about">
          <p className='p-1 hover:text-teal-200 rounded-md'>About</p>
        </Link>
        <Link to="/login">
          <p className='p-1 hover:text-teal-200 rounded-md'>Login</p>
        </Link>
      </div>
      {/* Model components */}
      <Model isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Add Item</h2>
        <div>
          <p>
            <label>Title</label>
            <input type='text' placeholder="Item Name" name="title" value={formData.title} onChange={handleChange} className="p-2 w-full rounded-md focus:outline-none focus:ring-1 ring-teal-500 border" />
            {errors.title && <p className="text-red-600">{errors.title}</p>}
          </p>
          <p>
            <label>Category</label>
            <input type='text' placeholder="Category Name" name="category" value={formData.category} onChange={handleChange} className="p-2 w-full rounded-md focus:outline-none focus:ring-1 ring-teal-500 border" />
            {errors.category && <p className="text-red-600">{errors.category}</p>}
          </p>
          <p>
            <label>Quantity</label>
            <input type='text' placeholder="Enter Quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="p-2 w-full rounded-md focus:outline-none focus:ring-1 ring-teal-500 border" />
            {errors.quantity && <p className="text-red-600">{errors.quantity}</p>}
          </p>
          <p>
            <label>Price</label>
            <input type='text' placeholder="Enter Price" name="price" value={formData.price} onChange={handleChange} className="p-2 w-full rounded-md focus:outline-none focus:ring-1 ring-teal-500 border" />
            {errors.price && <p className="text-red-600">{errors.price}</p>}
          </p>
          <div className="w-full p-2 rounded-md text-center bg-teal-600 my-2 cursor-pointer" onClick={handleSubmit}>Submit</div>
        </div>
      </Model>
    </div>
  );
}

export default Header;
