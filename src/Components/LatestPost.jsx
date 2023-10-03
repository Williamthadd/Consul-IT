import React from 'react'
import meta from "../Assets/meta.jpg"
import openai from "../Assets/openai.webp"
import swissbank from "../Assets/SwissBank.jpg"

const LatestPost = () => {
  return (
    <div className='latestpost'>
      <p className='greentech-title'>Chek out our latest post</p>
      <div className='distance2'></div>
      <div className="container text-center">
  <div className="row">
    <div className="col">
        <div className="card">
        <img src={meta} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">It is almost there 🤨, META is about to...</h5>
            <p className="card-text">Meta, the innovative tech giant formerly known as Facebook, has once again pushed the boundaries of technology with their latest unveiling at the annual MetaTech Summit...</p>
            <a href="#" className="btn btn-outline-success">Read More</a>
        </div>
</div>
    </div>
    <div className="col">
    <div className="card" >
        <img src={openai} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">New Product by OPEN AI: Chip Brain</h5>
            <p className="card-text">OpenAI, the renowned artificial intelligence research organization, has achieved a groundbreaking milestone in the realm of neural interface technology with the...</p>
            <a href="#" className="btn btn-outline-success">Read More</a>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card" >
        <img src={swissbank} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">200% Customers increased from...</h5>
            <p className="card-text">Credit Suisse, a global financial services leader, has unveiled a series of strategic expansion initiatives aimed at further strengthening its position in the dynamic...</p>
            <a href="#" className="btn btn-outline-success">Read More</a>
        </div>
        </div>
    </div>
  </div>
</div>
<a href='#'><p className='see-more-our-posts'>see more our posts...</p></a>
    </div>
  )
}

export default LatestPost
