import React from 'react'
import { Link } from 'react-router-dom'

const ReadDiv = ({ setData, id }) => {
  return (
    <>
      <h3>Details Of Patient</h3>
      <hr />
      <div className='mb-2'>
        <strong>Name : {setData.name}</strong>
        <hr />
      </div>
      <div className='mb-2'>
        <strong>Phone No : {setData.phone}</strong>
        <hr />
      </div>
      <div className='mb-2'>
        <strong>Room No : {setData.room}</strong>
        <hr />
      </div>
      <div className='mb-2'>
        <strong>Bill Amount : {setData.bill}</strong>
        <hr />
      </div>
      <Link to={`/dashboard/update/${id}`} className='btn btn-success'>
        Edit
      </Link>
      <Link to='/dashboard' className='btn btn-primary ms-3'>
        Back
      </Link>
    </>
  )
}

export default ReadDiv
