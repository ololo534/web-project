import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from "./components/Header";
import TodoApp from "./components/TodoApp";
import StickyFooter from "./components/Footer";

function App() {
  return (
      <>
        <Header />
        <div className="container">
          <TodoApp />
        </div>
        <StickyFooter />
      </>
  );
}

export default App;
