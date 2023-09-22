import React from 'react'
import InputFiled from './InputFiled'
import { Link } from 'react-router-dom'

const Form = ({
  handleSubmit,
  inputName,
  inputPhone,
  inputRoom,
  inputBill,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-2'>
        <label htmlFor='name'>Name:</label>
        <InputFiled
          type={'text'}
          placeholder={'Enter Full Name'}
          name={'name'}
          inputChange={inputName}
        />
      </div>
      <div className='mb-2'>
        <label htmlFor='phone'>Phone No:</label>
        <InputFiled
          size='20'
          minlength='9'
          maxlength='14'
          type={'tel'}
          placeholder={'Enter Phone Number'}
          name={'phone'}
          inputChange={inputPhone}
        />
      </div>
      <div className='mb-2'>
        <label htmlFor='name'>Room No:</label>
        <InputFiled
          type={'number'}
          placeholder={'Enter Room Number'}
          name={'room'}
          inputChange={inputRoom}
        />
      </div>
      <div className='mb-2'>
        <label htmlFor='name'>Bill Amount:</label>
        <InputFiled
          type={'number'}
          placeholder={'Enter Bill Amount'}
          name={'bill'}
          inputChange={inputBill}
        />
      </div>
      <button className='btn btn-success'>Submit</button>
      <Link to='/dashboard' className='btn btn-primary ms-3'>
        back
      </Link>
    </form>
  )
}

export default Form
