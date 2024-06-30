import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


import Navbar from './Navbar.jsx'
import Card from './Card.jsx'
import Blogdetails from './Blogdetails.jsx'
import { baseURl } from '../url.js'


function Dashboard() {

  const user = useSelector((state) => state.user)
  const clicked = useSelector((state) => state.blogDetail)
  
  const [blogs, setBlogs] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null)
  

  const handleClick = (blog) => {
    console.log("clicked");
    setSelectedBlog(blog)
  }

  useEffect(() => {
    axios.get(`${baseURl}/api/blog/get`)
      .then((res) => {
        setBlogs(res.data)
        // setSelectedBlog(null) 
      })
      .catch((error) => {
        console.log(error)
      })
  }, [user.userID, clicked])

  return (
    <div>
    <Navbar />
    {selectedBlog ? (
      <Blogdetails blog={selectedBlog} />
      ) : blogs.length === 0 ? (
        <h2 className="text-2xl font-bold mb-4 text-center">No Blogs</h2>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">All Blogs</h2>
          <div className="mt-8 p-6 flex justify-around flex-wrap gap-6">
            {blogs && blogs.map((blog) => (
              <Card key={blog._id} blog={blog} onClick={() => handleClick(blog)} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard;
