import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Body id="app-body"/>
    </div>
  );
}

export default App;