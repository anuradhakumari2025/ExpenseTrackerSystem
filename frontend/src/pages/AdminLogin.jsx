import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    console.log(captainData)
  }, [captainData])

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-20 mb-3" src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="Logo" />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What is your Email?</h3>
          <input 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base text-black'
            type="email" 
            placeholder='email@example.com'
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base text-black'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            type="password" 
            placeholder='password'
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>
        </form>
        <p className='text-center'>Join a Fleet?<Link to='/adminsignup' className='text-blue-600'> Register as a Captain </Link></p>
      </div>
      <div>
        <Link
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
      </div>
    </div>
  )
}

export default AdminLogin
