import React from 'react';


const LoadingScreen = ({ progress }: { progress: number }) => {
  return (
    <div className="loadingContainer">
      <div className="spinner"></div>
      <p className='loading-text'>Inhaling Rushium....{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
