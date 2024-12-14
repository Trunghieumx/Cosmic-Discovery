import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';



function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/food" >Food</Link>
        <Link to="/add" >Add New Food</Link>
        <Link to="/" >About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
