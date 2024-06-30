import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Navbar from './Navbar.jsx'
import UpdateBlogForm from './updateFormBlog.jsx'
import Blogdetails from './Blogdetails.jsx'
import Card from './Card.jsx'
import { baseURl } from '../url.js'


function Myblogs() {

  const [blogs, setBlogs] = useState([])
  const [editingBlog, setEditingBlog] = useState(null);

  const user = useSelector((state) => state.user)
  const [change, setChange] = useState(false)

  useEffect(() => {
    axios.get(`${baseURl}/api/blog/get/${user.userID}`)
      .then((res) => {
        console.log(res.data)
        setBlogs(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [user.userID, change])

  const handleUpdateSuccess = () => {
    setChange(!change);
    setEditingBlog(null);
  };

  const handleClick = (blog) => {
    console.log("clicked");
    // console.log(props.blog);
    <Blogdetails blog={blog} />
  }

  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-bold mb-4 text-center">My Blogs</h2>
      <div className="mt-8 p-6 flex justify-around">
        {
          blogs && blogs.map((blog) => (
            <div key={blog._id} >
              <Card blog={blog} onClick={handleClick} />
              <div className='w-72 p-4 bg-gray-100 rounded shadow-md'>
                <button className="px-3 py-2 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  onClick={() => {
                    axios.delete(`${baseURl}/api/blog/delete/${blog._id}`)
                      .then((res) => {
                        alert('Blog deleted successfully')
                      })
                      .catch((error) => {
                        console.log(error)
                      })
                    setChange(!change)
                  }}
                >
                  Delete
                </button>
                <button
                  className="px-3 py-2 ml-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={() => setEditingBlog(blog)}
                >
                  Update
                </button>
              </div>
              {editingBlog && editingBlog._id === blog._id && (
                <UpdateBlogForm blog={editingBlog} onUpdateSuccess={handleUpdateSuccess} />
              )}

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Myblogs;
/*

*/
