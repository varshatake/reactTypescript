import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/person';

function App() {
  const personinfo = {
    firstName : 'Jenny',
    lastName: 'Wayne',
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greet name='Shaurya' messagecount={20} isloogedin ={true}></Greet>
      <Person name ={personinfo}></Person>
    </div>
  );
}

export default App;
