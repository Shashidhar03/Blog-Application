import React from 'react';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div className="flex h-screen">

      <div className="w-7/12 bg-blue-600 flex flex-col items-center justify-center p-6 space-y-7">
      <h1 className="text-white text-5xl font-bold">Blog Application</h1>
      <div className="text-center text-slate-300">
        <p>create and login to your account to see all the blogs</p>
        <p>for better experience of Application add imageurl of images from google</p>
      </div>
    </div>
  

      <div className="w-5/12 flex flex-col items-center justify-center bg-gray-100">
        <Link to="/login"
          className="mb-4 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"

        >
          Login
        </Link>
        <Link to="/signup"
          className="px-6 py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"

        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
