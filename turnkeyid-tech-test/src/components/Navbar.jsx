import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  let genders = ['Male', 'Female'];
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://i.imgur.com/YqSY8ed.png"
            alt="logo"
            style={{ width: '90px' }}
          />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink exact to="/" activeClassName="menu" style={{ textDecoration: 'none' }} className="text-light list-menu">
              <p class="nav-link h5">Home</p>
            </NavLink>
            <NavLink to="/favorites" activeClassName="menu" style={{ textDecoration: 'none' }} className="text-light list-menu">
              <p class="nav-link h5">Favorites</p>
            </NavLink>
            <div class="dropdown">
              <a class="nav-link dropdown-toggle text text-light h5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gender</a>
              <div class="dropdown-content">
                {genders?.map(gender => {
                  return (
                    <a href="#">{gender}</a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <form class="d-flex ml-2">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
