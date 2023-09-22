import React from 'react'
import InputFiled from './InputFiled'
import Button from './Button'
import Label from './Label'

const RegisterForm = ({
  handleSubmit,
  name,
  inputChangeName,
  validateUsername,
  email,
  inputChangeEmail,
  validateEmail,
  password,
  inputChangePass,
  validatePassword,
}) => {
  return (
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
        type={'password'}
        placeholder={'enter your password'}
        name={password}
        inputChange={inputChangePass}
        validate={validatePassword}
      />
      <div className='btn-submit-reg'>
        <Button className='btn-log' type='submit' name='Register' />
      </div>
    </form>
  )
}

export default RegisterForm
