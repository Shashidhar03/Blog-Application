import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { baseURl } from '../url.js';

function AddBlog() {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user)
  // console.log(user)

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`${baseURl}/api/blog/create`, { title: blogData.title, content: blogData.content, imageUrl: blogData.imageUrl, userID: user.userID })
      .then((res) => {
        alert('Blog added successfully')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error)
      });
    setBlogData({
      title: '',
      content: '',
      imageUrl: ''
    });

  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Blog</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content:</label>
          <textarea
            id="content"
            name="content"
            value={blogData.content}
            onChange={handleChange}
            rows="5"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 font-semibold mb-2">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={blogData.imageUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleSubmit}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
