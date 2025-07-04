// import { useState } from 'react'
import '../css/Home.module.css'
// import ImageSlidingGallery from '../components/ImageSlidingGallery'
// import DescGallery from '../components/DescGallery'
// import Projects from '../components/Projects'
import ChartHome from '../components/ChartHome'
// import projectList from '../assets/ProjectList'

function Home() {  
  
    return (
      // <div className='projectContainer'>
      <div className='row'>
        <div className='col'>
          <ChartHome/>
        </div>
        <div className='col'>
          <h1>Welcome to my website</h1>
        </div>
      </div>
    )
  }
  
  export default Home