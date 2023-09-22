import React from 'react'

const Label = ({ hint, place }) => {
  return <label htmlFor={hint}>{place}</label>
}

export default Label
