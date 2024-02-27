// src/components/Page1.js
import React, { useState } from 'react';
import backgroundImage from './BG.png';
import buttonImages from '../buttonImages';
import overlayImage from './exhibitorbg.png';

const Page1 = ({ onNavigate, onNavigateToHome, onButtonClick, setSelectedMidImageIndex }) => {
  const [currentPage, setCurrentPage] = useState('/'); // Initial page path
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

  const headerStyle = {
    position: 'fixed',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
    zIndex: 2, // Ensure the header is above the overlay
  };

  const overlayStyle = {
    position: 'fixed',
    width: '100%',
    height: '83%',
    top: '51%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundImage: `url(${overlayImage})`,
    backgroundSize: 'cover',
    overflow: 'auto',
    borderRadius: '8px',
    zIndex: 1, // Set a lower z-index to place it behind the header
  };

  const backButtonStyle = {
    width: '16%',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    top: '2%',
  };

  const buttonsContainerStyle = {
    width: '70%', // Adjusted to a percentage with quotes
    display: 'grid', // Corrected display value to a string
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '35px', // Added quotes around gap value
    marginTop: '32%', // Added quotes around marginTop value
    overflowY: 'auto', // Added quotes around overflowY value
    maxHeight: '77.5%', // Added quotes around maxHeight value
    paddingLeft: '11%', // Added quotes around paddingLeft value
    paddingRight: '13%', // Added quotes around paddingRight value
  };

  const buttonStyle = {
    width: '100%', // Set the width to 100% to fill the buttonsContainer
    padding: '15px',
    fontSize: '0px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundSize: 'cover',
  };

  const handleBackButtonClick = () => {
    setCurrentPage('/');
    onNavigate('/');
  };

  const handleButtonClick = (targetPage) => {
    setCurrentPage(targetPage);
    onNavigate(targetPage);

    // Extract the index from the targetPage
    const index = parseInt(targetPage.split('-')[1]) - 1;
    setSelectedMidImageIndex(index);
  };
  
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={backButtonStyle} onClick={onNavigateToHome}>
          Back
        </button>
      </div>
      <div style={overlayStyle}>
        <div style={buttonsContainerStyle}>
          {buttonImages.map((buttonImage, index) => (
            <div
              key={index}
              style={{
                ...buttonStyle,
                backgroundImage: `url(${process.env.PUBLIC_URL}/${buttonImage})`,
              }}
              onClick={() => handleButtonClick(`/page2-${index + 1}`)} // Change target page dynamically
            >
              <button style={{ background: 'none', border: 'none', width: '100%', height: '100%' }}>
                {/* Button content */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page1;
