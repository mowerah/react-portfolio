import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://github.com/mowerah"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/mohamed-werah/"><LinkedInIcon /></a>
        <a href="mailto:mohamed.werah@gmail.com"><EmailIcon /></a>
        <a href="https://twitter.com/Mootje822"><TwitterIcon /></a> 
      </div>
      <p> &copy; 2023 mwerah.net</p>
    </div>
  )
}

export default Footer