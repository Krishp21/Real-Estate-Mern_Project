import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'  
import { useState, useEffect } from 'react'
import { app } from '../firebase'
import {getDownloadURL, getStorage, ref, uploadBytesResumable,} from 'firebase/storage'
//import getStorage from 'redux-persist/es/storage/getStorage'
const Profile = () => {
const fileRef = useRef(null)
const { currentUser } = useSelector((state) => state.user);
const [file, setFile] = useState(undefined)
const [fileError, setFileError] = useState(false)
const [filePercentage, setFilePercentage] = useState(0)
const [formData, setFormData] = useState({})
// console.log(file);
// console.log(formData);
// console.log(filePercentage);
// console.log(fileError);
  //firebase storage
  // allow read;
  // allow write: if
  // request.resource.size < 2*1024*1024 &&
  // request.resource.contentType.matches('image/.*')


  useEffect(() => {
    if(file){
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
  
  const storage = getStorage(app);
  const fileName = new Date().getTime() + file.name; // unique file name
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, file); //resumable upload means it can be paused and resumed
  uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; //percentage of the file uploaded
    // console.log('Upload is ' + progress + '% done');
    setFilePercentage(Math.round(progress));
    
  },
  
  (error)=>{
    setFileError(true);
  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => 
     setFormData({...formData, avatar: downloadURL})
    );
  }
  );
};
  

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept='image/*'/> 
        <img onClick={()=>fileRef.current.click()} 
        src={formData.avatar || currentUser.avatar} //load the new image if uploaded
        
        className='rounded-full h-24 w-24 
        object-cover cursor-pointer self-center mt-2' alt="profile" />
      
      <p className='text-sm self-center'>
        {fileError ? (<span className='text-red-700'>Error in uploading image(Image must be less than 2MB )</span> ) :
        filePercentage > 0 && filePercentage < 100 ? (<span className='text-slate-700'>{`Uploading ${filePercentage}%`}</span>) 
        : filePercentage === 100 ? (<span className='text-green-700'>Image uploaded successfully</span>) 
        :('')}
      </p>
      <input type="text" placeholder='Enter username' className='border p-3 rounded-lg' id='username' value={currentUser.name} />
      <input type="email" placeholder='Enter email' className='border p-3 rounded-lg' id='email' value={currentUser.name} />
      <input type="password" placeholder='Enter password' className='border p-3 rounded-lg'  id='password' value={currentUser.name} />
      <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile
