import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <TaskList />
    </div>
  );
}

export default App;
