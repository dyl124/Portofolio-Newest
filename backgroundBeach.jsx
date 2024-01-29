import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './backgroundBeach.css';
import Video from './assets/sea.mp4';
import Video1 from './assets/sc-fi.mp4';
import Video2 from './assets/christmas.mp4'
import Video3 from './assets/graffiti.mp4'

const Background = () => {
  const videoRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleCanPlay = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      videoRef.current.removeEventListener('canplay', handleCanPlay);
    };

    if (videoRef.current) {
      videoRef.current.src = Video; // Set default video source
      videoRef.current.playbackRate = 1.5;
      videoRef.current.addEventListener('canplay', handleCanPlay);
    }

    // Handle conditional logic based on the pathname
    if (location.pathname === '/portfolio') {
      videoRef.current.src = Video1; // Set video source for the portfolio page
    }
    else if (location.pathname === '/contact') {
      videoRef.current.src = Video2;
    }
    else if (location.pathname === '/resume') {
      videoRef.current.src = Video3;
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="fullscreen-video-container">
        <video ref={videoRef} className="fullscreen-video" loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Background;
