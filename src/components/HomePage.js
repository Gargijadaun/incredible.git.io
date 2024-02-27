// src/components/HomePage.js
import React from 'react';
import backgroundImage from './BG.png'; // Replace with the path to your background image
import overlayImage from './overlaybg.png'; // Replace with the path to your overlay image
import buttonImage1 from './Layout.png'; // Replace with the path to your first button image
import buttonImage2 from './EXhibitor.png'; // Replace with the path to your second button image

const HomePage = ({ onNavigate, onNavigateToExhibitor }) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%', // Set background width to 100%
    position: 'fixed', // Set position to fixed
    top: 0,
    left: 0,
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  };
  const overlayStyle = {
    position: 'fixed',
    width: '100%',
    height: '93%',
    top: '48%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundImage: `url(${overlayImage})`,
    backgroundSize: 'cover',
    overflow: 'auto',
    borderRadius: '8px',
    zIndex: 1, // Set a lower z-index to place it behind the header
  };
  
  const buttonContainerStyle = {
    width: '100%',
    height: '69%', // Adjusted height to make room for the buttons
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '5%',
  };

  const buttonStyle1 = {
    position: 'absolute',
    top: '13%', // 15% from the top
    width: '44%',
    height: '27%',
    backgroundImage: `url(${buttonImage1})`,
    backgroundSize: 'cover',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 1,
    padding: '0px', // Adjust the padding as needed
  };

  const buttonStyle2 = {
    position: 'absolute',
    bottom: '15%', // 15% from the bottom
    width: '44%',
    height: '27%',
    backgroundImage: `url(${buttonImage2})`,
    backgroundSize: 'cover',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 1,
    padding: '0px', // Adjust the padding as needed
  };

  const mediaQuery = '@media (min-height: 685px)';

  // Apply styles only when the height is more than 685 pixels
  const mobileStyles = {
    overlayStyle: {
      [mediaQuery]: {
        left: '10%', // Adjust the left value as needed
      },
    },
    buttonStyle1: {
      [mediaQuery]: {
        left: '10%', // Adjust the left value as needed
      },
    },
    buttonStyle2: {
      [mediaQuery]: {
        left: '10%', // Adjust the left value as needed
      },
    },
  };
  
  return (
    <div style={containerStyle}>
      {/* Overlay behind buttons */}
      <div style={{ ...overlayStyle, ...mobileStyles.overlayStyle }}></div>
  
      {/* Buttons */}
      <div style={buttonContainerStyle}>
        <button style={{ ...buttonStyle1, ...mobileStyles.buttonStyle1 }} onClick={onNavigate}>
          {/* Button content */}
        </button>
        <button style={{ ...buttonStyle2, ...mobileStyles.buttonStyle2 }} onClick={onNavigateToExhibitor}>
          {/* Button content */}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
