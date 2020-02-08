import React from 'react';
import logo from './logo.svg';
import './App.css';
import SectionType1 from './SectionType1';

// Material UI Components
// material-ui.com
// https: 
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


function App() {
  return (
    <Container className="App">
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
    </Container>
  );
}

export default App;
