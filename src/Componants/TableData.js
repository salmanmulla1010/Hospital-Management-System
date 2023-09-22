import React from 'react'
import { Link } from 'react-router-dom'

const TableData = ({ data, handleDelete }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-2 mt-1'>
      <table
        className='table table-hover'
        style={{
          position: 'static',
        }}
      >
        <thead
          className='table-warning'
          style={{
            position: 'sticky',
            top: 150,
          }}
        >
          <tr>
            <th>P ID</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Room No</th>
            <th>Bill Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((patients, index) => (
                <tr key={index}>
                  <td>{patients.id}</td>
                  <td id='name_table'>{patients.name}</td>
                  <td>{patients.phone}</td>
                  <td>{patients.room}</td>
                  <td>
                    {patients.bill}&nbsp;&nbsp;
                    <b id='rs_end'>&#8360;.</b>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/read/${patients.id}`}
                      className='btn btn-sm btn-info me-4'
                    >
                      <b>Read</b>
                    </Link>
                    <Link
                      to={`/dashboard/update/${patients.id}`}
                      className='btn btn-sm btn-primary me-4'
                    >
                      <b> Edit </b>
                    </Link>
                    <Link
                      onClick={(e) => handleDelete(patients.id)}
                      className='btn btn-sm btn-danger me-4'
                    >
                      <b> Delete </b>
                    </Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableData
