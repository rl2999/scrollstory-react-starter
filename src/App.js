import React from 'react';
import logo from './logo.svg';
import './App.css';
import SectionType1 from './SectionType1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Project name!
        </h1>

        <p>
          Project name etc etc etc 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         
        
        <SectionType1 value="lol and im demonstrating how props can change the components " >
           if ur reading this its the children ? ?
           <
           / SectionType1>

      </header>

      < SectionType1 value="20">
        if ur reading this its the children??
        </ SectionType1>

    </div>
  );
}

export default App;
