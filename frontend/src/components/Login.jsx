import axios from 'axios'
import React from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { login, setUserInfo } from '../redux/userSlice.js'
import { baseURl } from '../url.js'


function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)

    await axios.post(`${baseURl}/api/user/signin`, user)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userID', res.data.result._id)
          dispatch(login())
          dispatch(setUserInfo(res.data.result._id))
          // console.log()
          // console.log(res.data)
          navigate('/dashboard')
        }

      })
      .catch((error) => {
        console.log(error)
        if (error.response) {
          const errorMessage = error.response.data.message;

          if (errorMessage === "User does not exist") {
            alert("User does not exist");
            navigate('/signup');
          } else if (errorMessage === "Invalid credentials") {
            alert("Invalid credentials");
            navigate('/login');
          } else if (error.response.status === 400) {
            alert("User already exists");
            navigate('/login');
          } else {
            console.error('Unexpected error:', errorMessage);
          }
        } else {
          console.error('Error during sign-up:', error);
        }
      })
    setUser({
      email: '',
      password: ''
    })

  }


  return (
    <div className='w-screen h-screen bg-slate-400 fixed'>
      <div className='w-96 h-96 m-auto mt-36'>
        <h1 className='text-3xl text-center text-white pt-10'>Login</h1>
        <form className='flex flex-col p-10 bg-white rounded-lg shadow-lg'>
          <input type='text' placeholder='Email' className='border-2 border-gray-300 p-2 my-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
            name='email' value={user.email} onChange={handleChange} />
          <input type='password' placeholder='Password' className='border-2 border-gray-300 p-2 my-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
            name='password' value={user.password} onChange={handleChange} autoComplete='current-password' />
          <button type="submit" className='bg-blue-600 text-white p-2 rounded-lg' onClick={handleSubmit}>Login</button>

          <h2>Dont have account? </h2>
          <Link to="/signup" className='text-blue-600'>Signup Now</Link>

        </form>
      </div>

    </div>
  )
}

export default Login;
