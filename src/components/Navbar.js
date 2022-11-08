import React from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='navbar'>
        <div>
            <Link to="/">Restaurant</Link>
        </div>
        <div>
            <Link to="/">Home</Link>
              <Link to="/add-restaurant">Add</Link>
        </div>
    </div>
  )
}

export default Navbar