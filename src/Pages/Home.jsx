import React from 'react'
import Navbar from '../Components/Navbar'
import "../style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import VideoBanner from '../Components/VideoBanner';
import Introduction from '../Components/Introduction';
import Values from '../Components/Values';
import LatestPost from '../Components/LatestPost';
import Clients from '../Components/Clients';
import Footer from '../Components/Footer';
import PeopleWorkWith from '../Components/PeopleWorkWith';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <VideoBanner></VideoBanner>
      <Introduction></Introduction>
      <PeopleWorkWith></PeopleWorkWith>
      <Values></Values>
      <LatestPost></LatestPost>
      <Clients></Clients>
      <div className='distance3'></div>
      <Footer></Footer>
    </div>
  )
}

export default Home
