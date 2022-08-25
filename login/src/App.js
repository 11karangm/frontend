import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <h1>WEBSITE</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "login" element={<Login />} />
      </Routes>
      </div>
  );
}

export default App;
