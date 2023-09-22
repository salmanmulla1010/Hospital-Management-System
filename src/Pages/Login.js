import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Button from '../Componants/Button'
import InputFiled from '../Componants/InputFiled'
import Label from '../Componants/Label'
import '../LoginRegisterCSS/LoginForm/Login.css'
import 'react-toastify/dist/ReactToastify.css'
const eye = <FontAwesomeIcon icon={faEye} />

export const Login = () => {
  //page navigate to path
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const inputChangePass = (event) => {
    setPassword(event.target.value)
  }

  const [passwordShown, setPasswordShown] = useState(true)
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  const handleSubmit = (e) => {
    // dose not refresh by default
    e.preventDefault()
    //we get email from local storage in String format with parse method and store in variable
    const loggeduser = JSON.parse(localStorage.getItem('email'))
    //we get password from local storage in String format with parse method and store in variable
    const loggedpassword = JSON.parse(localStorage.getItem('password'))
    //if stored data and given data is match then navigate to dashboard
    if (email === loggeduser && password === loggedpassword) {
      localStorage.setItem('loggedin', true)
      navigate('/dashboard')
    } else {
      //otherwise get error pop-up
      toast.error('Incorrect Credentials!', {
        position: 'top-center',
        theme: 'colored',
      })
    }
  }

  return (
    <>
      <div className='main-div'>
        <div className='name-hospital-div'>
          <h1 className='name-hospital'>Care & Cure</h1>
        </div>
        <div className='auto-form-container-reg'>
          <h2 className='log-text'>Log In</h2>
          <form className='login-form' onSubmit={handleSubmit}>
            <Label hint={'email'} place={'Email:'} />
            <InputFiled
              type={'email'}
              placeholder={'youremail6@gmail.com'}
              name={email}
              inputChange={inputChangeEmail}
            />
            <Label hint={'password'} place={'Password:'} />
            <InputFiled
              type={passwordShown ? 'password' : 'text'}
              placeholder={'enter your password'}
              name={password}
              inputChange={inputChangePass}
            />
            <i className='ilog' onClick={togglePasswordVisiblity}>
              {eye}
            </i>
            <div className='btn-submit'>
              <Button className='btn-log' type='submit' name='Log In' />
            </div>
          </form>
          <Link to='/register' className='link-btn'>
            Don't have an account? Register here.
          </Link>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}
