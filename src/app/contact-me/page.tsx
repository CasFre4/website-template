// import { useState } from 'react'
import styles from '../../css/Home.module.css'
// import ImageSlidingGallery from '../components/ImageSlidingGallery'
// import DescGallery from '../components/DescGallery'
// import Projects from '../components/Projects'
import ChartHome from '../../components/ChartHome'
// import { Link } from 'react-router-dom';
import ContactForm from '../../components/EmailForm'
// import emailjs from '@emailjs/browser';
// import projectList from '../assets/ProjectList'

function Home() {  
    return (
      // <p>in progress :I</p>
      <div>
        <div className='row'>
          <div className='col' style={{'--col-width': '.33', '--justify-col': 'flex-start'} as React.CSSProperties}>
            <ChartHome/>
          </div>
          <div className='col' style={{'--col-width': '.66','--justify-col': 'center', '--align-col': 'center'} as React.CSSProperties}>
            <div className='row' style={{'--col-width': '1', '--justify-row': 'flex-start'} as React.CSSProperties}>
              <div className={styles.description}>
                <h1>Contact Me Here</h1>
              </div>
            </div>
            <div className='row' style={{'--col-width': '1', '--justify-row': 'flex-start'} as React.CSSProperties}>
              <div className={styles.contactcontainer} style={{}}>
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home