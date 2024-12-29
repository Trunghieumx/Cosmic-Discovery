import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar({ onSelectIcon }) {
  const [selectedIcon, setSelectedIcon] = useState('home');
  const navigate = useNavigate();

  const handleClick = (iconName) => {
    setSelectedIcon(iconName);
    if (iconName === 'explore') {
      navigate('/explore'); // Điều hướng đến BookSearch
    } else if (iconName === 'world') {
      navigate('/', { state: { card: 'EarthCard' } }); // Điều hướng đến Home với trạng thái EarthCard
    } else if (iconName === 'home') {
      navigate('/'); // Điều hướng về Home chính
    } else if (iconName === 'obser') {
      navigate('/obser'); // Điều hướng đến trang Observatory
    } else if (iconName === 'astronut') {
      navigate('/astronut'); // Điều hướng đến trang Astronaut
    } else {
      onSelectIcon && onSelectIcon(iconName); // Xử lý icon khác nếu cần
    }
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
