import React from 'react';
import "../../styles/list.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Todo} from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../redux/slices/users';
import { useAuth } from '../../context/authContext';

function List() {
    const { list } = useSelector(state => state.users);
    const {collections} = useAuth()

    const collections23 = [];

    const dispatch = useDispatch();
 
    React.useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    let todos = []

    list.map(user => collections23.push(user))
    let dato1;
    if (collections) {
        collections.forEach(element => {
            let datos = element.datos;
            datos.forEach(todo => todos.push(todo))
        });
        let datos = collections[0].datos
        dato1 = datos[datos.length - 1];
    }
    // collections && console.log(collections[0].datos[0])

    
    const task1 = {
        name: 'Comprar componentes',
        color:"black",
        collection: "Buys",
        day: "Today",
        time: "11:00 AM",
        icon: "business"
    }
    const task2 = {
        name: 'Buscar presupuestos',
        color:"red",
        collection: "work",
        day: "Tomorrow",
        time: "6:00 PM",
        icon: "cart"
    }
    const task3 = {
        name: 'Llamar a Juan',
        color:"blue",
        collection: "Thinks to do",
        day: "Today",
        time: "7:00 PM",
        icon: "copie"
    }
    let users = [task1, task2, task3, task1, task2, task3, task1, task2, task2, task1, task1, task1, task1, task2];
    
    return (
        <div className="list-container">
            <div className="tittle-list">
                <div className="iconTittle">
                    <ShoppingCartIcon />
                </div>
                <div className="texTittle">
                    <div className="tittleList">
                        Buys
                    </div>
                    <div className="describeList">
                        Build any kind of dashboard for any kind of niche
                    </div>
                </div>
            </div>
            <div className="content-container">
                {todos.map((task, index) =>  <Todo key={index} data={task} /> )}
                {/* { <Todo data={dato1} />} */}

            </div>
        </div>
    );
}

export default List;