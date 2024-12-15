import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EarthCard from './components/EarthCard';



function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/planet" >Planet</Link>
        <Link to="/add" >Add New Food</Link>
        <Link to="/" >About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planet" element={<EarthCard />} />
      </Routes>
    </div>
  );
}

export default App;
