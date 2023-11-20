import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Artists from './components/Artists';
import CreateArtist from './components/CreateArtist'

function App() {
  console.log("APP")
  return (
    <Router>
      <Routes>
        <Route path="/Artist" element={Artists()} />
        <Route path="/CreateArtist" element={CreateArtist()} />
      </Routes>
    </Router>
  );
}

export default App;