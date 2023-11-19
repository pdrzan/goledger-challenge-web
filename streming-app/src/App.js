import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useGetHeader, useGetShema, useGetShemaPost } from './api/api'
import Artists from './components/Artists';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Artist" element={Artists()} />
      </Routes>
    </Router>
  );
}

export default App;