import React from 'react'
import ProjectItem from '../components/ProjectItem'
//import youtubelandingpage from '../assets/youtubelandingpage.jpeg'
// import BMI from '../assets/BMI.jpeg'
// import rotatinggallery from '../assets/rotatinggallery.jpeg'
// import countdown2022 from '../assets/countdown2022.jpeg'
import '../styles/Projects.css'
import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
      {/* <ProjectItem name='YOUTUBE VIDEO LANDING PAGE' image={youtubelandingpage}/>
      <ProjectItem name='BODY MASS INDEX APP' image={BMI}/>
      <ProjectItem name='ROTATING IMAGE GALLERY' image={rotatinggallery}/>
      <ProjectItem name='NEW YEAR COUNTDOWN APP' image={countdown2022}/> */}

      {ProjectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image}/>
      })}
      </div>
    </div>
  )
}

export default Projects