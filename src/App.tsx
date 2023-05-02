import React from 'react';
import logo from './BWHLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo"/>
        <p>
          You have successfully Logged in!
        </p>
      </header>
    </div>
  );
}

export default App;
