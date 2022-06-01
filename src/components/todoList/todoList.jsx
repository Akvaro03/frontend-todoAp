import React from 'react'
import { Header } from '../../common';
import "../../styles/todoList.css"
import {BodyTodo} from '../index';
// import { useCookie } from '../../hooks/useCookie';


function TodoList() {
    // const [mostrarCookies] = useCookie();
    // mostrarCookies( localStorage.email)
    return (
        <div className="crearCuenta container-todo">
            <Header />
            <BodyTodo />
        </div>
    );
}

export default TodoList;