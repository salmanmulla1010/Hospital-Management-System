import React from 'react'
import { Link } from 'react-router-dom'

const HeadingPatients = () => {
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center, MainAddList'
      style={{
        position: 'sticky',
        top: 60,
        padding: 2,
        textAlign: 'center',
        backgroundImage: `url("https://png.pngtree.com/background/20210709/original/pngtree-medical-research-doctor-background-picture-image_958734.jpg")`,
        backgroundPosition: 'top',
      }}
    >
      <div
        className='ListDiv'
        style={{
          display: 'block',
          padding: 5,
          verticalAlign: 'middle',
        }}
      >
        <h2 id='list_patients'>List of Patients</h2>
      </div>
      <div
        className='AddDiv'
        style={{
          display: 'block',
          verticalAlign: 'middle',
        }}
      >
        <Link to='/dashboard/create' className='btn btn-success'>
          <b>Add +</b>
        </Link>
      </div>
    </div>
  )
}

export default HeadingPatients
