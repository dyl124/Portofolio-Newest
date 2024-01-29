
import Recipes from './assets/Recipiefordisaster.png';
import Xinc1 from './assets/xinc 1.png';
import Xinc2 from './assets/xinc 2.png';
import './carousel.css'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return (        
    <div className="carousel-container">
 <Carousel>
        <div >
          <img src={Recipes} alt="Image 1" className='carouselImages'/>
          <p className="RecipesText">Created a recipie search engine using edamame Api, basic html and tailwind css.</p>
        </div>
        <div>
          <img src={Xinc1} alt="Image 2" className='carouselImages' />
          <p className="Xinc1Text">Created our own Apis, to create a app for buisnesses which allows the tracking of income and expenses.</p>
        </div>
        <div>
          <img src={Xinc2} alt="Image 3" className='carouselImages' />
          <p className="Xinc2Text">We used Handlbars, css Tailwind and a Sql databse.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
