// src/components/Page1.js
import React, { useState, useRef, useEffect  } from 'react';
import backgroundImage from './BG.png';
// import midImage from './map.png';
// import buttonImages from '../buttonImages';
import overlayImage1 from './layoutbg.png';
import overlayImage2 from './map.png'; 
import close from './close.png';
const Exhibitor = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState('/');
  const [overlayImage, setOverlayImage] = useState(overlayImage1);
  const [initialDistance, setInitialDistance] = useState(0);
  const [currentDistance, setCurrentDistance] = useState(0);
  const [zoomFactor, setZoomFactor] = useState(1);
  const midDivRef = useRef(null);

  const [isCloseButtonVisible, setCloseButtonVisibility] = useState(false);

  useEffect(() => {
    // Change the overlay image once after 4 seconds
    const changeImageTimeout = setTimeout(() => {
      setOverlayImage(overlayImage2);

      // Set the close button to be visible after 1 second
      const closeButtonTimeout = setTimeout(() => {
        setCloseButtonVisibility(true);
      }, 1000);

      return () => clearTimeout(closeButtonTimeout);
    }, 1000);

    // Clear the timeout to prevent further changes
    return () => clearTimeout(changeImageTimeout);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

    const containerStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: '0px',
    };
    const overlayStyle = {
      position: 'fixed',
      width: '100%',
      height: '97%',
      top: '49%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundImage: `url(${overlayImage})`,
      backgroundSize: 'cover',
      overflow: 'auto',
      borderRadius: '8px',
      zIndex: 1, // Set a lower z-index to place it behind the header
    };
    
  // const backButtonStyle = {
  //   width: '16%',
  //   padding: '10px',
  //   fontSize: '16px',
  //   border: 'none',
  //   borderRadius: '8px',
  //   cursor: 'pointer',
  //   backgroundImage: `url(${close})`,
  //   backgroundSize: 'cover',
  //   zIndex: 2,
    
  // };

  const headerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr auto', // Align the back button to the right
    alignItems: 'center',
  };
  const closeButtonStyle = {
    position: 'absolute',
    top: '78%',
    right: '2px',
    cursor: 'pointer',
    padding: 0,
    border: 'none',
    background: 'transparent',
    zIndex: 2,
    transform: 'rotate(90deg)', // Rotate the button by 90 degrees
  };
  
  return (
    <div
      style={containerStyle}
      // onTouchStart={onTouchStart}
      // onTouchMove={onTouchMove}
      // onTouchEnd={onTouchEnd}
    >
      {isCloseButtonVisible && (
        <button onClick={() => onNavigate('page2')} style={closeButtonStyle}>
          <img src={close} alt="Close Icon" style={{ width: '60px', height: '29px' }} />
        </button>
      )}

      
      <div style={overlayStyle}></div>
      {/* <div style={headerStyle}>
        <button style={backButtonStyle} onClick={onNavigate}>
          Back
        </button>
      </div> */}

    </div>
  );
};

export default Exhibitor;