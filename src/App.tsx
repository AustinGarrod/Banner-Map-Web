import React from 'react';
import { Router } from "@reach/router";

// Import custom components
import Header from './components/Header';

// Import views
import Home from './views/Home';
import Details from './views/Details';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <Details path="/veteran" />
      </Router>
    </div>
  );
}

export default App;
