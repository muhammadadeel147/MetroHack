// VideoSection.js

import React from 'react';
import YouTube from 'react-youtube';
import './VideoSection.css';

const VideoSection = () => {
  const videoId = 'QvkDDA62-tw'; // Replace with the actual YouTube video ID

  const opts = {
     // Adjust the height as needed
    width: '640',
    playerVars: {
      autoplay: 0, // Change to 1 if you want autoplay
    },
  };

  return (
    <div className="video-section">
      <div className="video-container">
        <YouTube videoId={videoId} opts={opts} />
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
