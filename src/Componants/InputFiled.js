import React from 'react'

const InputFiled = ({ type, placeholder, name, inputChange, validate }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={inputChange}
      onBlur={validate}
      className='form-control'
      required
    />
  )
}

export default InputFiled
