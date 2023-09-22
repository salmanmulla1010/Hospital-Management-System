import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Label from '../Componants/Label'
import InputFiled from '../Componants/InputFiled'
import Button from '../Componants/Button'
import 'react-toastify/dist/ReactToastify.css'
import '../LoginRegisterCSS/RegCss/Reg.css'
const eye = <FontAwesomeIcon icon={faEye} />

export const Register = () => {
  //page navigate to path
  const navigate = useNavigate()
  //store name inside this usestate
  const [name, setName] = useState('')
  //store email inside this usestate
  const [email, setEmail] = useState('')
  //store password inside this usestate
  const [password, setPassword] = useState('')

  const inputChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const inputChangeName = (event) => {
    setName(event.target.value)
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
    if (validateUsername(name)) {
      //username stored (set) in local storage in the form of String
      localStorage.setItem('name', JSON.stringify(name))
      if (validateEmail(email)) {
        //email stored (set) in local storage in the form of String
        localStorage.setItem('email', JSON.stringify(email))
        if (validatePassword(password)) {
          //password stored (set) in local storage in the form of String
          localStorage.setItem('password', JSON.stringify(password))
          navigate('/')
        } else {
          //gives pop-up when password is not match with regular expression
          alert(
            'password must contain upper and lower case, number and special character'
          )
        }
      } else {
        //gives pop when email is not match with regular expression
        toast.error(' Enter a valid email!', {
          position: 'top-center',
          theme: 'colored',
        })
      }
    } else {
      //gives pop when username is not match with regular expression
      alert('user name not accept upper case and space')
    }
  }
  // regular expression for name validation
  const validateUsername = (name) => {
    const regex = /^[a-z][-a-z0-9_]*\$?$/.test(name)
    //.test method check regular expression is match with given parameter
    return regex
  }
  // regular expression for email validation
  const validateEmail = (email) => {
    const checkEmail =
      /^[a-z][\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@[a-z]{1,}\.com)/
    //.test method check regular expression is match with given parameter then return
    return checkEmail.test(email)
  }
  // regular expression for password validation
  const validatePassword = (password) => {
    const checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
    //.test method check regular expression is match with given parameter
    return checkPass.test(password)
  }

  return (
    <>
      <div className='main-div'>
        <div className='name-hospital-div'>
          <h1 className='name-hospital'>Care & Cure</h1>
        </div>
        <div className='auto-form-container-reg'>
          <h2 className='reg-text'>Register</h2>
          <form className='register-form' onSubmit={handleSubmit}>
            <Label hint={'username'} place={'User Name:'} />
            <InputFiled
              type={'text'}
              placeholder={'enter user name'}
              name={name}
              inputChange={inputChangeName}
              validate={validateUsername}
            />

            <Label hint={'email'} place={'Email:'} />
            <InputFiled
              type={'email'}
              placeholder={'youremail6@gmail.com'}
              name={email}
              inputChange={inputChangeEmail}
              validate={validateEmail}
            />
            <Label hint={'password'} place={'Password:'} />
            <InputFiled
              type={passwordShown ? 'password' : 'text'}
              placeholder={'enter your password'}
              name={password}
              inputChange={inputChangePass}
              validate={validatePassword}
            />
            <div className='btn-submit-reg'>
              <Button className='btn-log' type='submit' name='Register' />
            </div>
          </form>
          <i className='ireg' onClick={togglePasswordVisiblity}>
            {eye}
          </i>
          <Link to='/' className='link-btn'>
            Already have an account? Login here.
          </Link>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}
