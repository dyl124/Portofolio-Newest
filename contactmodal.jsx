import React from 'react'
import Portrait from './assets/portrait.jpg'
import './contactmodal.css';
import GithubIcon from './assets/github.png'
import LinkedinIcon from './assets/linkedin.png'
import FaceBookIcon from './assets/facebook.png'
function ContactModal() {
    return(
   <div className="left-container">
      <img src={Portrait} alt="portrait" className="Portrait" />
      <div className="textContainerAboutMe">
    <p className='textContact'>
          <div className='bioFirstLine'>
            <span className='firstLineBold'>🚀 Thanks For Visiting</span>
          </div>
          🛠️<span > My interests </span> lie in the intersection of technology and finance, particularly within the banking sector. I am drawn to challenges involving large databases, and I thoroughly enjoy the intricacies of software engineering.
          <br />
          🧠<span className="spanAlternativeColour"> My approach to work </span> is characterized by a strong drive and unwavering tenacity to succeed. I am eager to contribute my skills and knowledge to a dynamic team, fostering innovation and growth.
          <br />
          💻 <span> If you share a vision for excellence </span> and are looking for a dedicated professional with a passion for software development, I would be thrilled to connect.
          <br />
         
    </p>
        <div className="social-links">
          <a href="https://github.com/dyl124" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/dylan-main-391b24240/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://facebook.com/dylan.b.main" target="_blank" rel="noopener noreferrer">
            <img src={FaceBookIcon} alt="Facebook" />
          </a>
          <div className='squareDiv'>
        </div>
      </div>
    </div>    
    

    </div>     
    )
    
}

export default ContactModal;