import React from 'react';
import Portrait from './assets/portrait.jpg';

import './aboutmeModal.css';

function AboutMeModal() {
    return (
        <div className="aboutMeContainer">
            <img src={Portrait} alt="portrait" className="aboutMePortrait" />
            <div className="aboutMeTextContainer">
                <p>
                    <div className='aboutMeBioFirstLine'>
                        <span className='aboutMeFirstLineBold'>🚀 Meet Dylan,</span> <span className='restOfFirstLine'>your next software wizard! </span> 
                    </div>
                    <br />
                    🚀<span className="aboutMeSpanAlternativeColour">Dive into the world of innovation with me,</span> Dylan – an aspiring software engineer and web development aficionado currently conquering the challenges at Monash University's dynamic boot camp.
                    <br />
                    🛠️<span className='span1'>What's in my toolbox?</span> I specialize in crafting seamless digital experiences and thrive on side projects, especially in the magical realm of SEO. Juggling two jobs while immersing myself in coding? Consider it done!
                    <br />
                    🧠<span className="aboutMeSpanAlternativeColour">Let's talk tech! </span> My coding journey started with HTML and CSS, and since then, I've navigated the captivating landscapes of JavaScript APIs, Node.js, SQL, NoSQL, and the fine art of good coding practices. Now, I'm turning dreams into reality with React.
                    <br />
                    🌐 <span className='span1'>Ready to innovate together?</span> Connect with me, collaborate, and let's embark on this thrilling tech adventure! Cheers to creating something extraordinary!
                    <br />
                    🚀👨‍💻<span className="aboutMeSpanAlternativeColour"> #TechInnovation</span> #WebDeveloper #LetsCollaborate
                </p>
            </div>
        </div>
    );
}

export default AboutMeModal;
