// import { useState } from 'react'
import styles from '../css/Home.module.css'
// import ImageSlidingGallery from '../components/ImageSlidingGallery'
// import DescGallery from '../components/DescGallery'
// import Projects from '../components/Projects'
import ChartHome from '../components/ChartHome'

import Link from 'next/link'
// import projectList from '../assets/ProjectList'

function Home() {  
  
    return (
      // <div className='projectContainer'>
      <div className='row'>
        <div className='col' style={{'--col-width': '.33', '--justify-col': 'flex-start'} as React.CSSProperties}>
          <ChartHome/>
        </div>
        <div className='col'>
          <div className='row' style={{'--col-width': '.33', '--justify-row': 'flex-start'} as React.CSSProperties}>
            <div className={styles.description}>
              <h1>Welcome to Omar's spot</h1>
              <p>Welcome to my site, I am Omar Castro.</p><p>I am a focused and dedicated interdisciplinary developer with a heavy focus on data-driven solutions. I continuously expore new ways of collecting, visualizing, and interpreting data trends. I strive to learn about and build systems which provide meaningful connections between information and users.</p>
            </div>
          </div>
          <div className='row' style={{'--col-width': '.33', '--justify-row': 'flex-start'} as React.CSSProperties}>
            <div className={styles.hypercontainer}>
              <div className={styles.basichyper}><Link href='/projects'>Examples</Link></div>
              <div className={styles.basichyper}><Link href='/contact-me'>Reach out</Link></div>
            </div>
          </div>
        </div>
      </div>
    )

  }
  
  export default Home