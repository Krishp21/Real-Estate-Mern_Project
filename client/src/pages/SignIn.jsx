import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice'
import OAuth from '../components/OAuth'

const SignIn = () => {
const [formData, setFormData] = useState({}) //to keep track of form data
const{loading, error}=useSelector((state)=>state.user)
  const navigate = useNavigate() //to navigate to another page
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({
      ...formData, //keep track of previous values
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault() //prevent page from reloading
    try{
      dispatch(signInStart())
      const res = await fetch ('api/auth/signin', 
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
         dispatch(signInFailure(data.message))
       
        return;
      //console.log(data); 
    }  
    dispatch(signInSuccess(data));
  
    navigate('/'); //navigate to sign-in page

    } catch (error) {
    dispatch(signInFailure(error.message))
    }
   
};
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
      Sign In
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      
        <input type="email" placeholder='Enter your email' className='border p-3 rounded-lg ' id='email'onChange={handleChange}></input>
        <input type="password" placeholder='Enter your password' className='border p-3 rounded-lg ' id='password'onChange={handleChange}></input>
      <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to= {'/sign-up'} className='text-slate-700 hover:underline'>
        <span className='text-blue-700'>Sign Up</span></Link>
      </div>
      {error && <p className='text-red-500 text-center mt-5'>{error}</p>} 
      
    </div>
  )
}

export default SignIn
