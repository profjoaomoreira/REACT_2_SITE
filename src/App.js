import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Faculdade e <code>Escola Técnica Alcides</code> Maya.
        </p>
        <a
          className="App-link"
          href="https://alcidesmaya.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique e Acesse nosso Site
        </a>
      </header>
    </div>
  );
}

export default App;
