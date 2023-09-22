import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import ProtectedRoute from './Pages/ProtectedRoute'
import Update from './Pages/Update'
import Read from './Pages/Read'
import Create from './Pages/Create'
import Error from './Pages/Error'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      {/* Display Multiple Views in a Single Page */}
      <BrowserRouter>
        {/* Wrap All Route in Single Routes */}
        <Routes>
          {/* Render components based on path */}
          <Route path='/' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route
            path='/dashboard/create'
            element={<ProtectedRoute Component={Create} />}
          />

          <Route
            path='/dashboard/read/:id'
            element={<ProtectedRoute Component={Read} />}
          />

          <Route
            path='/dashboard/update/:id'
            element={<ProtectedRoute Component={Update} />}
          />
          <Route
            path='/dashboard'
            element={<ProtectedRoute Component={Dashboard} />}
          />

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
