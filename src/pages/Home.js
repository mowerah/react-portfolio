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
          <p>I'm a Frontend Developer. I build things for the web.</p>
        <a href="https://github.com/mowerah"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/mohamed-werah/"><LinkedInIcon /></a>
        <a href="mailto:mohamed.werah@gmail.com"><EmailIcon /></a>
        
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
            HTML5, CSS3, JavaScript, TypeScript, React, Bootstrap
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
            NodeJS, NPM and SQL
            </span>
          </li>
          <li className='item'>
            <h2>Tools</h2>
            <span>VS Code, Git, GitHub and Jest
            </span>
          </li>
        </ol>

      </div>
    </div>
  )
}

export default Home