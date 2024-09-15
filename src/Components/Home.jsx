import React from 'react'
import Lastnews from './Lastnews'

export default function Home() {
  return (
    <div>
      <div className="header " >
        <div className='container'>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" 
justify-content-center>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="slide6.png" className="d-block w-100" alt="Slide 1"/>
    </div>
    <div className="carousel-item">
      <img src="slide3.png" className="d-block w-100" alt="Slide 2"/>
    </div>
    <div className="carousel-item">
      <img src="slide.png" className="d-block w-100" alt="Slide 3"/>
    </div>
  </div>
</div>

</div>
  
<div className='container'>

<div className='row'>

<div className='row vertical-gap'>
  <div className="col-md-4">
    <div className="nk-feature-1">
      <div className="nk-feature-icon">
      <img src="icon-mouse.svg" alt=""/>
</div>
      <div className="nk-feature-cont  ">
      <h3 className="nk-feature-title" ><a href="/" >PC</a></h3>
      <h4 className="nk-feature-title text-main-1"><a href="/">View Games</a></h4>
    </div>
  </div>
 </div>

      
  <div className="col-md-4">
    <div className="nk-feature-1">
      <div className="nk-feature-icon">
      <img src="icon-gamepad.svg" alt=""/>
</div>
      <div className="nk-feature-cont">
      <h3 className="nk-feature-title"><a href="#">PS4</a></h3>
      <h4 className="nk-feature-title text-main-1"><a href="#">View Games</a></h4>
    </div>
  </div>
 </div>
 <div className="col-md-4">
    <div className="nk-feature-1">
      <div className="nk-feature-icon">
      <img src="icon-gamepad-2.svg" alt=""/>
</div>
      <div className="nk-feature-cont">
      <h3 className="nk-feature-title"><a href="#">XBOX</a></h3>
      <h4 className="nk-feature-title text-main-1"><a href="#">View Games</a></h4>
    </div>
  </div>
 </div>
</div>
</div>
</div>
<div className='container'>

<div className='row'>
<div className='nk-decorated-h-2 col-md-1' ></div>
<h3 className="nk-decorated-h col-md-3">
  <span><span className="text-main-1"style={{color:"#dd163b"}}>Latest</span> News</span></h3>
  <div className='nk-decorated-h-2 col-md-8 '></div>
</div>



{/* <div className='row'>
<div className='nk-news-box'>
  <div className='nk-news-box-list'>
    <div className='nano has-scrollbar'>
      <div className='nk-news-box-item nk-news-item-active'>
      <img src="post-1-sm.jpg" alt="Smell magic in the air. Or maybe barbecue" 
      className="nk-news-box-item-full-img"></img>
      <h3 className="nk-news-box-item-title">Smell magic in the air. Or maybe barbecue</h3>
      </div>

      

    </div>
      </div>
  </div>
</div> */}

<Lastnews/>

</div>                                   {/* row div */}

</div>                                  {/*header*/}
</div>



  )  
}
