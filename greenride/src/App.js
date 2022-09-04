import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './Home'
import Footer from './Footer'
import RiderTrip from './RiderTrip'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-Container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/riderTrip" element={<RiderTrip />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
