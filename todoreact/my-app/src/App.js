import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Login from './Pages/Login';
import Register from './Pages/Register'; // Assuming you have a Register component
import Welcome from './Pages/Welcome'; // Assuming you have a Register component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Define route for Login */}
          <Route path="/register" element={<Register />} /> {/* Define route for Register */}
          <Route path="/welcome" element={<Welcome />} /> {/* Define route for Register */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
