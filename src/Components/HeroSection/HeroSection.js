import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (

        <div className="hero-section">
            <video autoPlay muted loop className="background-video">
                <source src="/videos/mixkit-girl-working-on-the-floor-of-a-library-4518-4k.mp4" type="video/mp4"/>
            </video>
            <div className="content">
                <h1>ابدأ تعلمك اليوم، من أي مكان وفي أي وقت</h1>
                <div className="search-bar">
                    <input type="text" placeholder="........عن ماذا تبحث"/>
                    <button>ابحث عن المساق</button>
                </div>
            </div>
        </div>
    );

};

export default HeroSection;