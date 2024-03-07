import './App.css';
import {  Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home!</h1>} />
        <Route path="/about" element={<h1>About page!</h1>} />
        <Route path="/contact" element={<h1>Contact page!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
