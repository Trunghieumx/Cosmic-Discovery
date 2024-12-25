import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [selectedIcon, setSelectedIcon] = useState('home');

  const handleClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <div className="nav">
      <div className="icon-container">
        <div
          className={`eclipse ${selectedIcon === 'home' ? 'selected' : ''}`}
          onClick={() => handleClick('home')}
        >
          <img src="./images/iconhome.png" alt="Home" />
        </div>
        <div
          className={`eclipse ${selectedIcon === 'obser' ? 'selected' : ''}`}
          onClick={() => handleClick('obser')}
        >
          <img src="./images/iconobser.png" alt="Observatory" />
        </div>
        <div
          className={`eclipse ${selectedIcon === 'world' ? 'selected' : ''}`}
          onClick={() => handleClick('world')}
        >
          <img src="./images/iconworld.png" alt="Planet" />
        </div>
        <div
          className={`eclipse ${selectedIcon === 'explore' ? 'selected' : ''}`}
          onClick={() => handleClick('explore')}
        >
          <img src="./images/iconexplore.png" alt="Explore" />
        </div>
        <div
          className={`eclipse ${selectedIcon === 'astronut' ? 'selected' : ''}`}
          onClick={() => handleClick('astronut')}
        >
          <img src="./images/iconastronut.png" alt="About" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
