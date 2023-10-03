import React from 'react'
import logo from "../Assets/Logo.jpg"

const Navbar = () => {
  return (
    <div className='navbarbody'>
      <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt='logo...' className='logos'></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='gap'>

          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-services" href="#" id='navbar-content' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Automation System</a></li>
                <li><a className="dropdown-item" href="../Pages/ArtificialIntelligence" id='dropdown-item'>Artificial Intelligence <span className="badge text-bg-danger">Top</span></a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Blockchain <span className="badge text-bg-danger">Top</span></a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Business Process Managment</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Business Strategy</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Cloud Management <span className="badge text-bg-danger">Top</span></a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Customer Analytics</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Database Management <span className="badge text-bg-danger">Top</span></a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Data Analytics</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Design Consulting</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Digitalization</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Enterprize Optimation</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Finance Consulting <span className="badge text-bg-danger">Top</span></a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Marketing in Digital Media</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Mergers & Acuisition</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Metaverse <span className="badge text-bg-danger">Top</span></a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Mobile Application <span className="badge text-bg-danger">Top</span></a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Security System <span className="badge text-bg-danger">Top</span></a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Supply Chain Management</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Technology & Information Consulting</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Website Application</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Web3 <span className="badge text-bg-danger">Top</span></a></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id='navbar-content' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Industries
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Agriculture</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Automative</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Banking</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Chemicals & Pharmacy</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Communications & Media</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Consumer Goods and Services</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Design</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Education</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Green Energy</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Game</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Health</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Industrial</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Infrastructure</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Insurance</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Internet of Things</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Life Science</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Public Services</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Retail</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Software</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Technology</a></li>
                <li><a className="dropdown-item" href="#" id='dropdown-item'>Travel</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" id='navbar-content' href="#">Daily Post</a>
            </li>


            <li className="nav-item">
              <a className="nav-link" id='navbar-content' href="#">Contact Us</a>
            </li>

          </ul>

          <form className="d-flex search-bar" role="search">
            <input className="form-control me-2" type="search" placeholder="Search products/services..." aria-label="Search"></input>
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          
        </div>
      </div>
      
    </nav>

    </div>
    
  )
}

export default Navbar
