import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
      <img src="background.png" alt="" />
    </div>
    <div className="header" >
      <div className='nk-contacts-hrefp' >
        <div className='container'>
          <div className='row '>

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

            <div className='nk-contacts-Right '>
                <div className='nk-contacts-Icons d-flex col-md-12'>
                  <a href="#">
                    <i className="fa fa-user" style={{ fontSize: "15px" }}></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-search" style={{ fontSize: "15px" }}></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-shopping-cart" style={{ fontSize: "15px" }}>
                      <span className="nk-badge">27</span>
                    </i>
                  </a>
                </div>
              </div>
          </div>

       </div>
    </div>
     </div>
    </>
  )
}

export default Navbar
