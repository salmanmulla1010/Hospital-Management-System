import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: 'goldenrod',
        alignItems: 'center',
        justifyItems: 'baseline',
        marginTop: '10%',
        width: '40%',
        marginLeft: '25%',
      }}
    >
      <h1>Oops! You seem to be lost.</h1>
      <h3>Here are some helpful link:</h3>

      <NavLink
        to='/'
        style={{
          padding: 20,
          fontFamily: '-moz-initial',
          fontSize: '30px',
          color: 'white',
        }}
      >
        Log In
      </NavLink>
    </div>
  )
}

export default Error
