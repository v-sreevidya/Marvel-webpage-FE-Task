import React from "react";

import './Avengers.css';

const Avengers = () => {
    
    const handleNavigate = (path) => {
        window.open(window.location.origin + path, "_blank");
      };
    return (
        <div className="avengers-page">
                        <h1 className="head">AVENGERS</h1>
            <div className="thor">
                <button className="navigateThor" onClick={() => handleNavigate('/thor')}>
                    Learn More </button>
            </div>
            <div className="iron">
            <button className="navigateIron" onClick={() => handleNavigate('/iron')}>
                    Learn More </button>
            
            </div>
            <div className="captain">
            <button className="navigateCap" onClick={() => handleNavigate('/captain')}>
            Learn More </button>
            </div>
            <div className="hulk">
            <button className="navigateHulk" onClick={() => handleNavigate('/hulk')}>
            Learn More </button>
            </div>
            <div className="black">
            <button className="navigateBlack" onClick={() => handleNavigate('/black')}>
            Learn More </button>
            </div>
            <div className="spider">
            <button className="navigateSpider" onClick={() => handleNavigate('/spider')}>
            Learn More </button>
            </div>
        </div>
    );
};

export default Avengers;
