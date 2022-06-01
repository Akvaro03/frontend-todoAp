import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {CrearCuenta, Home, IniciarSesion} from './components/index.js';
import TodoList from './components/todoList/todoList.jsx';


function App() {
    return (
    <div className="App" >
        <Router>
            <Routes>
                <Route path="/" caseSensitive={false} element={<Home />} />
                <Route path="/crearCuenta" caseSensitive={false} element={<CrearCuenta />} />
                <Route path="/iniciarSesion" caseSensitive={false} element={<IniciarSesion />} />
                <Route path="/toDo" caseSensitive={false} element={<TodoList />} />
            </Routes>
        </Router>
    </div>
);
}

export default App;
