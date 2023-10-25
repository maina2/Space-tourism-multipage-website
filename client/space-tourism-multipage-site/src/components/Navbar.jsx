// import React from 'react'
import { Link ,useLocation} from 'react-router-dom';
import './navbar.css'



function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </div>
        <hr style={{display:"flex",marginTop:"auto",marginBottom:"auto", height:"1px", width:"40%"}}/>
        <div className="pages">
        <ul>
          <li><Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>01 Home</Link></li>
          <li><Link to={'/Destination'} className={location.pathname === '/Destination' ? 'active' : ''}>02 Destination</Link></li>
          <li><Link to={'/Crew'} className={location.pathname === '/Crew' ? 'active' : ''}>03 Crew</Link></li>
          <li><Link to={'/Technology'} className={location.pathname === '/Technology' ? 'active' : ''}>04 Technology</Link></li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar