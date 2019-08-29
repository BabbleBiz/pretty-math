import React from 'react';
import './App.css';
import ComponentForm from './ComponentForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Solve equations!
        </p>
      </header>
      <div>
        <ComponentForm />
      </div>
    </div>
  );
}

export default App;
