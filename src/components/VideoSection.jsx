

import React from 'react';
import './VideoSection.css';
import img from '../Assets/6.jpg'; 
const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <img
          src={img} 
          alt="Placeholder Image"
          width="640"
          height="360" 
          className="video-image"
        />
      </div>
      <div className="info-section">
        <h2>Why Donate Food?</h2>
        <p>
          Hunger is a critical issue affecting millions of people worldwide, with children being particularly vulnerable. Many families struggle to secure regular meals, leading to severe health consequences and hindering the potential of young minds.
        </p>
        <p>
          By donating food, you play a vital role in addressing this humanitarian crisis. Your contributions not only provide sustenance but also contribute to the reduction of food waste. Together, we can ensure that everyone, regardless of their circumstances, has access to nutritious meals, fostering healthier communities and brighter futures.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
