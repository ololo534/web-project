import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from "./components/Header";
import TodoApp from "./components/TodoApp";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <Header />
        <div className="container">
          <TodoApp />
        </div>
        <Footer />
      </>
  );
}

export default App;
