import './App.css';
import Login from './pages/Login';
import Homepage from "./pages/Homepage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
