import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Challenge16.png/1200px-Challenge16.png"
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
            <a class="nav-link h5 active" aria-current="page" href="#">Home</a>
            <a class="nav-link h5" href="#">Features</a>
            <a class="nav-link h5" href="#">Pricing</a>
            <a class="nav-link h5 disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </div>
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
