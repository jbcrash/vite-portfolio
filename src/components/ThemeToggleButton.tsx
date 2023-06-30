import React, { useState } from 'react';

//I have no idea why but this svg icon refuses to actually display. It also refuses to show title text

const ThemeToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px'}}>
        <button onClick={handleThemeToggle}>
            <title> Toggle </title>
            <img src={'src\assets\Dark.svg'} />
        </button>
    </div>
  );
};

export default ThemeToggleButton;
