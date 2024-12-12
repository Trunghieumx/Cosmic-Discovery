import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AddFood from './AddFood';
import FoodList from './FoodList';
import db from './food.json';

function App() {
  console.log("DB: " + db);

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
        <Route path="/food" element={<FoodList data={db} />} />
        <Route path="/add" element={<AddFood data={db} />} />
      </Routes>
    </div>
  );
}

export default App;
