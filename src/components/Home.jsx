import React, { useState } from 'react';
import './Home.css';
import './Fade.css';
import Saturn from './Saturn';
import Earth from './Earth';
import Sun from './Sun';
import Mars from './Mars';
import SolarPanel from './SolarPanel';
import BigBang from './BigBang';
import Evolution from './Evolution';
import EarthCard from './EarthCard';
import SunCard from './SunCard';
import MarsCard from './MarsCard';
import SolarSystemView from './SolarSystemView';
import SaturnCard from './SaturnCard';
import Mercury from './Mercury';
import MercuryCard from './MercuryCard';
import Venus from './Venus';
import VenusCard from './VenusCard';
import Jupiter from './Jupiter';
import JupiterCard from './JupiterCard';
import Uranus from './Uranus';
import UranusCard from './UranusCard';
import Neptune from './Neptune';
import NeptuneCard from './NeptuneCard';

function Home() {
  const [activeContent, setActiveContent] = useState('BigBang');
  const [fadeClass, setFadeClass] = useState('');

  const handleChangeContent = (content) => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setActiveContent(content); 
      setFadeClass('fade-in'); 
    }, 300);
  };

  return (
    <div className="container">
      <SolarPanel onExplore={() => handleChangeContent('SolarSystem')}/>
      <div className="content-container">
        <div className="explore">
          <div className="button-container">
            <div className="button" onClick={() => handleChangeContent('BigBang')}>Big Bang</div>
            <div className="button" onClick={() => handleChangeContent('Evolution')}>The Evolution Of The Earth</div>
          </div>
          <div className="planet-list">
            <Earth onExplore={() => handleChangeContent('EarthCard')} />
            <Sun onExplore={() => handleChangeContent('SunCard')} />
            <Mars onExplore={() => handleChangeContent('MarsCard')} />
            <Saturn onExplore={() => handleChangeContent('SaturnCard')} />
            <Mercury onExplore={() => handleChangeContent('MercuryCard')}/>
            <Venus onExplore={() => handleChangeContent('VenusCard')}/>
            <Jupiter onExplore={() => handleChangeContent('JupiterCard')}/>
            <Uranus onExplore={() => handleChangeContent('UranusCard')}/>
            <Neptune onExplore={() => handleChangeContent('NeptuneCard')}/>
          </div>
        </div>
        <div className={`infor ${fadeClass}`}>
          {activeContent === 'BigBang' && <BigBang />}
          {activeContent === 'Evolution' && <Evolution />}
          {activeContent === 'EarthCard' && <EarthCard />}
          {activeContent === 'SunCard' && <SunCard />}
          {activeContent === 'MarsCard' && <MarsCard />}
          {activeContent === 'SaturnCard' && <SaturnCard />}
          {activeContent === 'MercuryCard' && <MercuryCard />}
          {activeContent === 'VenusCard' && <VenusCard />}
          {activeContent === 'JupiterCard' && <JupiterCard />}
          {activeContent === 'UranusCard' && <UranusCard />}
          {activeContent === 'NeptuneCard' && <NeptuneCard />}
          {activeContent === 'SolarSystem' && <SolarSystemView />}
        </div>
      </div>
    </div>
  );
}

export default Home;
