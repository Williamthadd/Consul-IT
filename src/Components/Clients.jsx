import React from 'react'
import google from "../Assets/google.png"
import amazon from "../Assets/amazon.webp"
import amex from "../Assets/amex.png"
import cambridge from "../Assets/cambridge.png"
import jandj from "../Assets/j&j.png"
import jpmorgan from "../Assets/jpmorgan.png"
import optimum from "../Assets/optimum.png"
import prime from "../Assets/prime.png"
import pwc from "../Assets/pwc.png"
import ua from "../Assets/underarmour.png"

const Clients = () => {
  return (
    <div>
      <p className='greentech-title'>Our Clients</p>
    <div className='distance2'></div>
      <div className="container text-center">
        <div className="row">
            <div className="col">
            <img src={google} className='clients-logo' alt='..'></img>
            </div>
            <div className="col">
            <img src={amex} className='clients-logo' alt='..'></img>
            </div>
            <div className="col">
            <img src={prime} className='clients-logo' alt='..'></img>
            </div>
            <div className="col">
            <img src={pwc} className='clients-logo' alt='..'></img>
            </div>
            <div className="col">
            <img src={jandj} className='clients-logo' alt='..'></img>
            </div>
        </div>
        </div>
        <div className='distance2'></div>
        <div className="container text-center">
        <div className="row">
            <div className="col">
            <img src={cambridge} className='clients-logo' alt='..'></img>
            </div>
            <div className="col">
            <img src={jpmorgan} className='clients-logo' alt='..'></img>
            </div>
            <div className="col">
            <img src={optimum} className='clients-logo' alt='..'></img>
            </div>
            <div className="col">
            <img src={ua} className='clients-logo' alt='..'></img>
            </div>
            <div className="col">
            <img src={amazon} className='clients-logo' alt='..'></img>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Clients
