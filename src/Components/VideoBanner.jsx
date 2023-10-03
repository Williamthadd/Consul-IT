import React from 'react'
import video from "../Assets/promotion.mp4"

const VideoBanner = () => {
  return (
    <div>
      <video src={video}  controlslist="nodownload" muted autoPlay loop className='videobanner'></video>
    </div>
  )
}

export default VideoBanner
