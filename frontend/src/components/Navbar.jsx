import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout, setUserInfo } from '../redux/userSlice.js';
import { clicked } from '../redux/blogDetailSlice.js';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    dispatch(logout());
    dispatch(setUserInfo(''));
    navigate('/');
  };

  const handleClick = () => {
    dispatch(clicked());
    

  }

  return (
    <nav className="bg-gray-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to="/dashboard" className="text-white text-2xl font-bold">Blog App</Link>
        <div className="flex space-x-4">
          <NavLink to="/dashboard" label="All Blogs"  onClick={handleClick}/>
          <NavLink to="/myblogs" label="My Blogs" />
          <NavLink to="/addblog" label="Add Blog" />
          <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
        </div>
      </div>
    </nav>
  );

};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-300 transition duration-300"
  >
    {label}
  </Link>
);

export default Navbar;
