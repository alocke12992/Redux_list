import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import NavBar from './components/NavBar';



const App = () => (
  <div className="App">
    <TodoForm />
    <TodoList />
    <TodoFooter />
  </div>
)

export default App;