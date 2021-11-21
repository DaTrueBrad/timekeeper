import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <NavLink
        strict to='/dashboard/time'
        activeStyle={{
          backgroundColor: "#6f1a07",
          color: "#ffffff",
          border: '3px solid #6f1a07',
          boxShadow: '0px 3px 10px rgba(0,0,0,0.5)'
      }}
      >
        <i class='bx bxs-alarm' ></i>
      </NavLink>
      <NavLink
        strict to='/dashboard/user'
        activeStyle={{
          backgroundColor: "#6f1a07",
          color: "#ffffff",
          border: '3px solid #6f1a07',
          boxShadow: '0px 3px 10px rgba(0,0,0,0.5)'
      }}
      >
        <i class='bx bxs-user' ></i>
      </NavLink>
      <NavLink
        strict to='/dashboard/export'
        activeStyle={{
          backgroundColor: "#6f1a07",
          color: "#ffffff",
          border: '3px solid #6f1a07',
          boxShadow: '0px 3px 10px rgba(0,0,0,0.5)'
      }}
      >
        <i class='bx bxs-file-export' ></i>
      </NavLink>
    </footer>
  )
}

export default Footer
