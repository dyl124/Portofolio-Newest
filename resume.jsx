import React from 'react'; 
import Background from './backgroundBeach';
import ScreenShotResume from './assets/screenshotresume.png'
import './resume.css'
const Resume = () => {
  return (
    <div>
      <a href="https://drive.google.com/file/d/1sFWpwa4oIksVqV_gkBLPDMi2AaQTpmAh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='resumeScreenshot'>
                <img src={ScreenShotResume} alt='screenshot'  className='resumeScreenshot'></img>
        </a>
     
    
      <Background />
    </div>
  );
};

export default Resume;


