import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png'; //for images
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik'; //to access data of the form
import { usernameValidate } from '../helper/validate'
import { useAuthStore } from '../store/store'

import styles from '../styles/Username.module.css';

//login page
export default function Username() {

  const navigate = useNavigate();
  const setUsername = useAuthStore(state => state.setUsername); //using the action to store the username

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      setUsername(values.username);
      navigate('/password')
    }
  })

  return (
    <div className="container mx-auto" >

      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen' style={{ maxHeight: "100vh", marginTop: "-8vh" }}>
        <div className={styles.glass}>
          <div className="title flex flex-col items-center" style={{ marginTop: "-3vh" }}>
            <h6 className='text-3xl font-bold'>Hello Again!</h6>
            <span className='py-2 text-l w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-3'>
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' autoComplete='off' />
              <button className={styles.btn} type='submit'>Let's Go</button>
            </div>
            <div className="text-center py-2">
              <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
