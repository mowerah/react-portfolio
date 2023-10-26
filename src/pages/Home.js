import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hey there, welcome!</h2>
        <div className='prompt'>
          <p>I'm a Software Developer. I like to build web and mobile applications.</p>
        <a href="https://github.com/mowerah"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/mohamed-werah/"><LinkedInIcon /></a>
        <a href="mailto:mohamed.werah@gmail.com"><EmailIcon /></a>
        </div>
      </div>
      
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Tools</h2>
            <span>VS Code, Git, GitHub, Jest and Docker
            </span>
          </li>
          <li className='item'>
            <h2>Mobile Development</h2>
            <span>React Native, Android Studio, Xcode and Maestro (Mobbile UI Testing)
            </span>
          </li>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
            HTML5, CSS3, JavaScript, TypeScript, React and Bootstrap
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
            NodeJS, NPM and SQL
            </span>
          </li>
        </ol>

      </div>
    </div>
  )
}

export default Home