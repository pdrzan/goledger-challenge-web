import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Artists from './components/Artists';
import CreateArtist from './components/CreateArtist'
import VisualizeArtist from './components/VisualizeArtist';
import UpdateArtist from './components/UpdateArtist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Artists" element={Artists()} />
        <Route path="/CreateArtist" element={CreateArtist()} />
        <Route path="/VisualizeArtist" element={VisualizeArtist()} />
        <Route path="/UpdateArtist" element={UpdateArtist()} />
      </Routes>
    </Router>
  );
}

export default App;