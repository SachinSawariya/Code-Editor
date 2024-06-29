import React from 'react';
import CodeEditor from './components/CodeEditor';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactJs Code Editor</h1>
      </header>
      <main>
        <CodeEditor />
      </main>
    </div>
  );
};

export default App;
