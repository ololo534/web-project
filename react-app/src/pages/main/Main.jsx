import React from 'react'

import Header from "../../components/Header";
import TodoApp from "../../pages/main/TodoApp";
import Footer from "../../components/Footer";

export default function Main() {
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
