import './Navbar.css'
function Navbar() {
    return ( 
        <div className="nav">
            <div className="icon-container">
                <img src="./images/Home Icon.png" alt="Home" />
                <img src="./images/observatory.png" alt="Observatory" />
                <img src="./images/World Icon.png" alt="Planet" />
                <img src="./images/Map Icon.png" alt="Map" />
                <img src="./images/Astronaut Icon.png" alt="" />
            </div>
            <div className="eclipse">
                <img src="/images/Ellipse.png" alt="" />
            </div>
        </div>
     );
}

export default Navbar;