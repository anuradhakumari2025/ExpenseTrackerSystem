import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminSignup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
  
  
    const submitHandler = (e) => {
      e.preventDefault()
      
      setUserData({
        // fullName:{
          name:name,
          // lastName: lastName
        // },
        
        email:email,
        password: password
      })
  
      // console.log(userData);
      setEmail('')
      setName('')
      // setLastName('')
      setPassword('')
    }
  return (
    // <div>
      <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
      <img className="w-20 mb-3" src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="Logo" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="text-lg w-full font-medium mb-2"> Admin's Name ?</h3>
          <div className='flex gap-4 mb-6'>
          <input 
            required 
            className='bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base text-black'
            type="text" 
            placeholder='First Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          {/* <input 
            required 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base text-black'
            type="text" 
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          /> */}
          </div>

          <h3 className="text-lg font-medium mb-2"> Admin's Email?</h3>
          <input 
            required 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base text-black'
            type="email" 
            placeholder='email@example.com'
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input 
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base text-black'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password" 
            placeholder='password'
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
          <p className='text-center'>Already have an account ?<Link to='/adminlogin' className='text-blue-600'> Login here </Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
        This site is protected by reCAPTCHA and the 
        <span className='underline'> Google privacy Policy </span> 
        and <span className='underline'> Terms of Service apply. </span>
        </p>
      </div>
    </div>
    // </div>
  )
}

export default AdminSignup