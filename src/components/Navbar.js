import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{background: "cornflowerblue"}}>
    <div className="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link">
              Create Post
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/read" class="nav-link">
              All Post
            </Link>
          </li>
        </ul>
      </div>

      <input
        class="form-control "
        type="search"
        placeholder="Search"
      ></input>
    </div>
  </nav>
  )
}


