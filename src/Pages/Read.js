import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReadDiv from '../Componants/ReadDiv'

const Read = () => {
  const [data, setData] = useState([])
  //It is use for fetch data from url
  //here id fetched from url
  const { id } = useParams()
  useEffect(() => {
    axios
      .get('http://localhost:3000/patients/' + id)
      .then((show) => setData(show.data))
      .catch((err) => console.log(err))
  }, [id])
  return (
    <div
      className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'
      style={{
        backgroundImage:
          'url("https://www.1nurse.com/blog/media/filer_public/ef/0b/ef0b4e96-8693-4e7c-91e1-36c7b8b2f244/nurse_writing_1.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className='w-50  bg-white px-5 pt-3 pb-4 rounded'
        style={{
          boxShadow:
            'rgba(50, 50, 93, 0.9) 0px 50px 100px -20px, rgba(0, 0, 0, 0.9) 0px 30px 60px -30px, rgba(10, 37, 64, 0.9) 0px -2px 6px 0px inset',
        }}
      >
        <ReadDiv setData={data} id={id} />
      </div>
    </div>
  )
}

export default Read
