import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../LoginRegisterCSS/DashCss/DashCss.css'
import TableData from '../Componants/TableData'
import Navbar from '../Componants/Navbar'
import HeadingPatients from '../Componants/HeadingPatients'

const Dashboard = () => {
  const navigate = useNavigate()
  //get user name from local storage for displaying on website.
  const userName = JSON.parse(localStorage.getItem('name'))

  const [data, setData] = useState([])
  useEffect(() => {
    //send asynchronous HTTP request
    axios
      .get('http://localhost:3000/patients')
      .then((show) => setData(show.data))
      .catch((err) => console.log(err))
  }, [])

  //for logout
  const handleLogOut = () => {
    //takes a key and removes the corresponding key -value pair.
    localStorage.removeItem('loggedin')
    navigate('/')
  }
  //for delete patients details
  const handleDelete = (id) => {
    const confirm = window.confirm('Would you like to Delete?')
    if (confirm) {
      axios
        .delete('http://localhost:3000/patients/' + id)
        .then((show) => {
          //for refresh window
          window.location.reload()
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <>
      <Navbar userName={userName} handleLogOut={handleLogOut} />
      <HeadingPatients />
      <TableData data={data} handleDelete={handleDelete} />
    </>
  )
}

export default Dashboard
