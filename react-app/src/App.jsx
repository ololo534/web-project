import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from "./components/header";
import TodoApp from "./components/todoApp";

function App() {
  return (
      <>
        <Header />
        <div className="container">
          <TodoApp />
        </div>
      </>
  );
}

export default App;
