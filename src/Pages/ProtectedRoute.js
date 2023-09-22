import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute(props) {
  const { Component } = props
  const validate = localStorage.getItem('loggedin')
  // if user is log In then go to Current Page else directed login page
  return validate ? <Component /> : <Navigate to={'/'} />
}

export default ProtectedRoute
