import React from 'react'
import Home from './Home'

const Navbar = () => {
  return (
    <>
   
    <div className="header" >
      <div className='nk-contacts-hrefp' >
        <div className='container'>
          <div className='row'>

            <div className='nk-contacts-left col-md-8'>
              <div className='nk-social-links'>
                <ul>

                  <li>
                    <a className="fa fa-rss" href="#" style={{ size: "30px" }}></a>
                  </li>
                  <li>
                    <a className="fa fa-twitch" href="#" style={{ size: "30px" }}></a>
                  </li>
                  <li>
                    <a className="fa fa-twitter" href="#" style={{ size: "30px" }}></a>
                  </li>
                  <li>
                    <a className="fa fa-steam" href="#" style={{ size: "30px" }}></a>
                  </li>
                  <li>
                    <a className="fa fa-facebook" href="#" style={{ size: "30px" }}></a>
                  </li>
                  <li>
                    <a className="fa fa-pinterest" href="#" style={{ size: "30px" }}></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='nk-contacts-Right  col-md-4 text-right '>
                <div className='nk-contacts-Icons '>
                  <a href="#">
                    <i className="fa fa-user" style={{ fontSize: "15px" }}></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-search" style={{ fontSize: "15px" }}></i>
                  </a>
                  <a href="">
                    <i className="fa fa-shopping-cart" style={{ fontSize: "15px" }}>
                      <span className="nk-badge">27</span>
                    </i>
                  </a>
                </div>
              </div>
       </div>
    </div>
            </div>
    <div className='row'>

     <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            <img src="logo.svg" style={{ width: "", height: "35px" }} alt="" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/">Features</a>
              <a className="nav-link" href="/">About</a>
            </div>
          </div>
        </div>
      </nav>
          </div>
    </div>
   
   

    </>
  )
}

export default Navbar
