import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
const Update = () => {
  //it is used for navigate pages
  const navigate = useNavigate()
  //It is use for fetch data from url
  //here id fetched from url
  const { id } = useParams()
  const [infos, setInfos] = useState({
    name: '',
    phone: '',
    room: '',
    bill: '',
  })

  useEffect(() => {
    //retrieve(get) data from json
    axios
      .get('http://localhost:3000/patients/' + id)
      .then((show) => setInfos(show.data))
      .catch((err) => console.log(err))
  }, [id])

  const handleSubmit = (value) => {
    value.preventDefault()
    //update data in json as well as dashboard
    axios
      .put('http://localhost:3000/patients/' + id, infos)
      .then((show) => {
        console.log(show)
        navigate('/dashboard')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div
      className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/male-doctor-medical-uniform-standing-hospital-background_31965-448.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className='w-50 bg-white px-5 pt-3 pb-5 rounded'
        style={{
          boxShadow: '1px 2px 9px #F4AAB9',
        }}
      >
        <h1>Update Patient Details</h1>

        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Enter Full Name'
              value={infos.name}
              onChange={(inf) => setInfos({ ...infos, name: inf.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone No:</label>
            <input
              type='number'
              name='phone'
              className='form-control'
              required
              minLength={10}
              placeholder='Enter Phone Number'
              value={infos.phone}
              onChange={(inf) =>
                setInfos({ ...infos, phone: inf.target.value })
              }
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='name'>Room No:</label>
            <input
              type='number'
              name='room'
              className='form-control'
              placeholder='Enter Room Number'
              value={infos.room}
              onChange={(inf) => setInfos({ ...infos, room: inf.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='name'>Bill Amount:</label>
            <input
              type='number'
              name='bill'
              className='form-control'
              placeholder='Enter Bill Amount'
              value={infos.bill}
              onChange={(inf) => setInfos({ ...infos, bill: inf.target.value })}
            />
          </div>
          <button className='btn btn-success'>Update</button>
          <Link to='/dashboard' className='btn btn-primary ms-3'>
            back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Update
