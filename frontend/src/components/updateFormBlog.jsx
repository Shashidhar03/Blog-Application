import React, { useState } from 'react';
import axios from 'axios';
import { baseURl } from '../url.js';

function UpdateBlogForm({ blog, onUpdateSuccess }) {
  const [formData, setFormData] = useState({
    title: blog.title,
    content: blog.content,
    imageUrl: blog.imageUrl
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${baseURl}/api/blog/update/${blog._id}`, formData)
      .then((res) => {
        alert('Blog updated successfully');
        onUpdateSuccess();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label>Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update Blog</button>
    </form>
  );
}

export default UpdateBlogForm;
