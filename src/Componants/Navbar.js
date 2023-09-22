import React from 'react'

const Navbar = ({ userName, handleLogOut }) => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid ms-auto'>
        <h1 className='navbar-brand'>Care & Cure</h1>
        <div className='navbar-nav ms-auto'>
          <h3 className='navbar-brand textAlign-center'>
            <img
              id='usericon'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__gOqF3POOhLtiD3JT762gSmyXQR8TmLDY5fL-yY62lUBbG-wxM3ka80IlhDrd2a060Y&usqp=CAU'
              alt='user-icon'
            />
            Hello, @<span id='username'>{userName}</span>
          </h3>
        </div>
        <div className='navbar-nav ms-auto'>
          <button
            onClick={handleLogOut}
            type='button'
            className='btn btn-warning'
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
