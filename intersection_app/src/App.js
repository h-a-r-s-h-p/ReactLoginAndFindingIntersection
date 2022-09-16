
import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>                                            {/* Routes is wrapped because everything outside routes will be present in every component */}
          <Route exact path="/" element={<Home />} />

        </Routes>
      </div>
      <footer> @author Harsh Parihar</footer>
    </BrowserRouter>
  );
}

export default App;
