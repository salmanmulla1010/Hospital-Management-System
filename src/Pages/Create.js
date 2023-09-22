import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import Form from '../Componants/Form'

const Create = () => {
  const navigate = useNavigate()
  const [infos, setInfos] = useState({
    name: '',
    phone: '',
    room: '',
    bill: '',
  })
  const inputName = (inf) => {
    setInfos({ ...infos, name: inf.target.value })
  }
  const inputPhone = (inf) => {
    setInfos({ ...infos, phone: inf.target.value })
  }
  const inputRoom = (inf) => {
    setInfos({ ...infos, room: inf.target.value })
  }
  const inputBill = (inf) => {
    setInfos({ ...infos, bill: inf.target.value })
  }
  const handleSubmit = (value) => {
    // dose not refresh by default
    value.preventDefault()
    //create new data using post method
    axios
      .post('http://localhost:3000/patients', infos)
      .then((show) => {
        console.log(show)
        navigate('/dashboard')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div
        className=' d-flex w-100 vh-100 justify-content-center align-items-center'
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/male-doctor-medical-uniform-standing-hospital-background_31965-448.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className='w-50  bg-white  px-5 pt-3 pb-5 rounded'
          style={{
            boxShadow: '1px 2px 9px #F4AAB9',
          }}
        >
          <h1>Add a Patient</h1>
          <Form
            handleSubmit={handleSubmit}
            inputName={inputName}
            inputPhone={inputPhone}
            inputRoom={inputRoom}
            inputBill={inputBill}
          />
        </div>
      </div>
    </>
  )
}

export default Create
