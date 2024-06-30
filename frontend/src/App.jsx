import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Protected from './components/Protected.jsx'
import Dashboard from './components/Dashboard.jsx'
import Addblog from './components/Addblog.jsx'
import Myblogs from './components/Myblogs.jsx'

function App() {

    const user = useSelector((state)=>state.user);
    console.log(user); 
        
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Protected isLoggedIn={user.isLoggedIn}><Dashboard/> </Protected>} />
                <Route path="/addblog" element={<Protected isLoggedIn={user.isLoggedIn} ><Addblog/> </Protected>} />
                <Route path="/myblogs" element={<Protected isLoggedIn={user.isLoggedIn} ><Myblogs/> </Protected>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default App;


