// src/App.js
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Exhibitor from './components/Exhibitor';

const App = () => {
  const [selectedMidImageIndex, setSelectedMidImageIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedMidImageIndex(index);
  };

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'home' && (
        <HomePage
          onNavigate={() => handleNavigation('exhibitor')}
          onNavigateToExhibitor={() => handleNavigation('page1')}
        />
      )}
      {currentPage === 'page1' && (
        <Page1
          onNavigate={() => handleNavigation('page2')}
          onNavigateToHome={() => handleNavigation('home')}
          onButtonClick={handleButtonClick}
          setSelectedMidImageIndex={setSelectedMidImageIndex}
        />
      )}
      {currentPage === 'page2' && <Page2 selectedMidImageIndex={selectedMidImageIndex} onNavigate={() => handleNavigation('page1')} />}
      {currentPage === 'exhibitor' && <Exhibitor onNavigate={() => handleNavigation('home')} />}
    </div>
  );
};

export default App;
