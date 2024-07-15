import React from 'react'
import { app } from '../firebase'
import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth, signInWithPopup } from 'firebase/auth'    
import {useDispatch} from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
function OAuth() {

    const dispatch= useDispatch()
    const navigate= useNavigate()
    const handleGoogleClick = async () => {
        try{
            const provider= new GoogleAuthProvider();
            const auth= getAuth(app); //get the auth object from the app for firebase to recognize the user
            const result= await signInWithPopup(auth,provider);
            const res= await fetch('/api/auth/google',{ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL}),
            });
            const data= await res.json(); //convert the response to json
            dispatch(signInSuccess(data)); //dispatch the action to the reducer
            navigate('/');
            
        } catch(error){
            console.log('Failed to sign in with Google',error)
        }
    
    }
  return (
   <button type='button' 
   onClick={handleGoogleClick}
   className='bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      Continue with Google
   </button>
  )
}

export default OAuth
