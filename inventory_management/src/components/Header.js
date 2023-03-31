import React from 'react'
import logo from "./logo.png"

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    
      <img src={logo} alt="Logo" width="40" height="24" class="d-inline-block align-text-top" />
      
    
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">Signup</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/inventory">Inventory</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/home">Profile</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/home">Logout</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header