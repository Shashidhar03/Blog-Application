import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { baseURl } from '../url.js'

import { login, setUserInfo } from '../redux/userSlice.js'

function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
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

        await axios.post(`${baseURl}/api/user/signup`, user)
            .then(async (res) => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('userID', res.data.result._id)
                    dispatch(login())
                    dispatch(setUserInfo(res.data.result._id))
                    console.log(res.data)
                    await navigate('/dashboard')
                }
            })
            .catch((error) => {
                console.log(error)
                if (error.response && error.response.status === 400) {
                    alert("User already exists");
                    navigate('/login');
                }

            })
        setUser({
            name: '',
            email: '',
            password: ''
        })
    }



    return (
        <div className='w-screen h-screen bg-slate-400 fixed'>
            <div className='w-96 h-96 m-auto mt-36'>
                <h1 className='text-3xl text-center text-white pt-10'>Signup</h1>
                <form className='flex flex-col p-10 bg-white rounded-lg shadow-lg'>
                    <input type='text' placeholder='Name' className='border-2 border-gray-300 p-2 my-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                        name="name" value={user.name} onChange={handleChange} />
                    <input type='text' placeholder='Email' className='border-2 border-gray-300 p-2 my-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                        name="email" value={user.email} onChange={handleChange} />
                    <input type='password' placeholder='Password' className='border-2 border-gray-300 p-2 my-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600' autoComplete='current-password'
                        name="password" value={user.password} onChange={handleChange} />
                    <button type="submit" className='bg-blue-600 text-white p-2 rounded-lg' onClick={handleSubmit}>Signup</button>

                    <h2>already user ?</h2>
                    <Link to="/login" className='text-blue-600'>Login Now</Link>
                </form>
            </div>

        </div>
    )
}

export default Signup
