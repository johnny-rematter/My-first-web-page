import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [contador, setContador] = useState(0);
  

  useEffect(() => {
    setInterval(() => {
      setContador((currentValue) => currentValue + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {contador}
      </header>
    </div>
  );
}

export default App;
