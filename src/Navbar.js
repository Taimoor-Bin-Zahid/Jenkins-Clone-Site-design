import React from 'react'

function Navbar() {
  return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

    <a className="navbar-brand" id='textone' href="#">Jenkins</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <a className="nav-link" id='textTwo' href="#">CD</a>
    <div className="collapse navbar-collapse" id="navItems">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link" id="navbarText" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navbarText" href="#">Documentations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navbarText" href="#">Plugins</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navbarText" href="#">Community</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navbarText" href="#">Subprojects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navbarText" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navbarText" href="#">English</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navbarText" href="#">Download</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <input className="form-control me-2 searchbox" type="search" placeholder="Search" aria-label="Search"/>

    </form>
    </div>
</nav>

  )
}

export default Navbar;