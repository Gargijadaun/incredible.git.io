import React from 'react';
import backgroundImage from './exhibitorcardbg.png';
import closeIcon from './close.png';
import midImages from './MidImages'; 


const Page2 = ({ selectedMidImageIndex, onNavigate }) => {
  // Get the selected mid image path from the midImages array based on the index
  const selectedMidImage = midImages[selectedMidImageIndex];
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    textAlign: 'center',
  };

  const midImageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20%',
    width: '88%',
    height: 'auto',
    position: 'absolute',
    top: '36%',       // Center the mid image vertically
    left: '50%',      // Center the mid image horizontally
    transform: 'translate(-50%, -50%)', // Center the mid image
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '44px',
    right: '55px',
    cursor: 'pointer',
    padding: 0,
    border: 'none',
    background: 'transparent',
  };

  return (
    <div style={containerStyle}>
      {/* Dynamically set the midImage based on the selectedMidImage prop */}
      <img src={selectedMidImage} alt="Mid Image" style={midImageStyle} />
      <button onClick={() => onNavigate('page2')} style={closeButtonStyle}>
        <img src={closeIcon} alt="Close Icon" style={{ width: '60px', height: '29px' }} />
      </button>
    </div>
  );
};

export default Page2;
