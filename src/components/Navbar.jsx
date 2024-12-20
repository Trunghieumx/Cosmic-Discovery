import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Navbar.css'
import EarthCard from './EarthCard';
import SunCard from './SunCard';
function Navbar({ hideInfor }) {
    return (
        <div className="nav">
            <div className="icon-container">
                <Link to="/" ><img src="./images/Home Icon.png" alt="home" /></Link>
                <Link to="/obser" ><img src="./images/observatory.png" alt="observatory" /></Link>
                <Link to="/planet" ><img src="./images/World Icon.png" alt="planet" /></Link>
                <Link to="/about" ><img onClick={hideInfor} src="./images/Map Icon.png" alt="map" /></Link>
                <Link to="/sun" ><img src="./images/Astronaut Icon.png" alt="about" /></Link>
                <Routes>
                    <Route path='/'/>
                    <Route path="/planet" element={<EarthCard />} />
                    <Route path="/sun" element={<SunCard />} />
                </Routes>
            </div>
        </div>


    );
}

export default Navbar;