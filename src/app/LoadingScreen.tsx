import React from 'react';


const LoadingScreen = ({ progress }: { progress: number }) => {
  return (
    <div className="loadingContainer">
      <div className="spinner p-2"></div>
      <p className='loading-text p-2'>Inhaling Rushium....{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
