import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './common/ProtectedRoute.js';

import {CrearCuenta, Home, IniciarSesion} from './components/index.js';
import TodoList from './components/todoList/todoList.jsx';
import { AuthProvider } from './context/authContext.js';

function App() {
    return (
        
    <div className="App" >
    <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" caseSensitive={false} element={<Home />} />
                <Route path="/crearCuenta" caseSensitive={false} element={<CrearCuenta />} />
                <Route path="/iniciarSesion" caseSensitive={false} element={<IniciarSesion />} />
                <Route path="/toDo" caseSensitive={false} element={
                <ProtectedRoute>                    
                    <TodoList />
                </ProtectedRoute>
                } />
            </Routes>
        </Router>
    </AuthProvider>
    </div>
);
}

export default App;
