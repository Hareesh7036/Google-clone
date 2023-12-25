import React from 'react';
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HTML(){
  return(
  <>
  <main>
  <h2>HTML</h2>
  <p>It is a markup language.</p>
  </main>
  </>
  )
 }

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
            
          </Route>
          <Route path="/search" element={<SearchPage />}>
            
          </Route>
        </Routes>
            
      </Router>
    </div>
    
  );
}

export default App;
