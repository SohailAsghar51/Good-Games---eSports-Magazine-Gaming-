import React from 'react'

export default function Home() {
  return (
    <div>
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


<div className='row vertical-gap'>
  <div class="col-md-4">
    <div class="nk-feature-1">
      <div class="nk-feature-icon">
      <img src="icon-mouse.svg" alt=""/> 
</div>
      <div class="nk-feature-cont">
      <h3 class="nk-feature-title"><a href="#">PC</a></h3>
      <h4 class="nk-feature-title text-main-1"><a href="#">View Games</a></h4>
    </div>
  </div>
 </div>

      
  <div class="col-md-4">
    <div class="nk-feature-1">
      <div class="nk-feature-icon">
      <img src="icon-gamepad.svg" alt=""/>
</div>
      <div class="nk-feature-cont">
      <h3 class="nk-feature-title"><a href="#">PS4</a></h3>
      <h4 class="nk-feature-title text-main-1"><a href="#">View Games</a></h4>
    </div>
  </div>
 </div>
 <div class="col-md-4">
    <div class="nk-feature-1">
      <div class="nk-feature-icon">
      <img src="icon-gamepad-2.svg" alt=""/>
</div>
      <div class="nk-feature-cont">
      <h3 class="nk-feature-title"><a href="#">XBOX</a></h3>
      <h4 class="nk-feature-title text-main-1"><a href="#">View Games</a></h4>
    </div>
  </div>
 </div>
</div>

<div className='row'>
<div className='nk-decorated-h-2 col-md-1' ></div>
<h3 class="nk-decorated-h col-md-3">
  <span><span class="text-main-1">Latest</span> News</span></h3>
  <div className='nk-decorated-h-2 col-md-8 '></div>
</div>

</div>


  )  
}
