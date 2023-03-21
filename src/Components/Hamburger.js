import React from 'react'

const Hamburger = () => {
  return (
    <div>
        <ul className='ham-items'>
            <li><a href='/home' className='routes'>HOW IT WORKS</a></li>
            <li><a href='/about' className='routes'>ABOUT</a></li>
            <li><a href='/pricing' className='routes'>PRICING</a></li>
            <li><a href='/work' className='routes'>WORK</a></li>
            <button  className="navbar-btn">GET STARTED</button>
        </ul>
    </div>
  )
}

export default Hamburger