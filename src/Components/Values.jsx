import React from 'react'
import slide1 from "../Assets/slide1.jpg"
import slide2 from "../Assets/slide2.jpg"
import slide3 from "../Assets/slide3.webp"

const Values = () => {
  return (
    <div className='values'>
      <p className='title'>Our values</p>
      <div className='values-content'>

      <div className="container">
        <div className="row">
            <div className="col">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={slide1} className="d-block w-100" alt="..." id='slides'></img>
            
                </div>
                <div className="carousel-item">
                <img src={slide2} className="d-block w-100" alt="..." id='slides'></img>
                
                </div>
                <div className="carousel-item">
                <img src={slide3} className="d-block w-100" alt="..." id='slides'></img>
                
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
            </div>
           
            <div className="col">
            <p className='value-desc'>"As experienced IT consultants, our value lies in our ability to decipher complex technological
         landscapes and tailor strategic solutions that not only address immediate challenges but also unlock untapped opportunities,
          guiding businesses toward sustained growth and a competitive edge in the digital era."</p>
          <a href='#'><p className='see-more-our-activities'>see more our activities...</p></a>
            </div>
        </div>
        </div>
        
      

       

      </div>
    </div>
  )
}

export default Values
