import React from 'react'
import vector from '../Assests/Vector.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src= {vector} alt='navbar vector'/>
        <a href='/#'>HOW IT WORKS</a>
        <a href='/#'>ABOUT</a>
        <a href='/#'>WORK</a>
        <a href='/#'>PRICING</a>
        <a href='/#'>BLOG</a>
        <button className='navbar-btn'>GET STARTED</button>
    </div>
  )
}

export default Navbar