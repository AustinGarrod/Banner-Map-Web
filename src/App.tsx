import React from 'react';
import { Router } from "@reach/router";

// Import custom components
import Header from './components/Header';

// Import views
import Home from './views/Home';
import Details from './views/Details';


const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Home path="/" />
          <Details path="/veteran" />
        </Router>
      </div>
    </div>
  );
}

export default App;
