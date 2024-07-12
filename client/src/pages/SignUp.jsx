import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({}) //to keep track of form data
  const [loading, setLoading] = useState(false) //to keep track of loading state
  const [error, setError] = useState(null) //to keep track of error state
  const navigate = useNavigate() //to navigate to another page
  const handleChange = (e) => {
    setFormData({
      ...formData, //keep track of previous values
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault() //prevent page from reloading
    try{
      setLoading(true)
      const res = await fetch ('api/auth/signup', 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), //convert the form data to json
      }
      ); //fetching the data from the api
      const data = await res.json(); //converting the response to json
      console.log(data);
      if(data.success===false)
      {
        setLoading(false);
        setError(data.message);
       
        return;
      //console.log(data); 
    }  
    setLoading(false); //Loading is complete
    setError(null); //No error
    navigate('/sign-in'); //navigate to sign-in page

    } catch (error) {
     setLoading(false);
     setError(error.message);
    }
   
};
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
      Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Enter your username' className='border p-3 rounded-lg ' id='username'onChange={handleChange}></input>
        <input type="email" placeholder='Enter your email' className='border p-3 rounded-lg ' id='email'onChange={handleChange}></input>
        <input type="password" placeholder='Enter your password' className='border p-3 rounded-lg ' id='password'onChange={handleChange}></input>
      <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to= {'/sign-in'} className='text-slate-700 hover:underline'>
        <span className='text-blue-700'>Sign In</span></Link>
      </div>
      {error && <p className='text-red-500 text-center mt-5'>{error}</p>} 
      
    </div>
  )
}

export default SignUp
