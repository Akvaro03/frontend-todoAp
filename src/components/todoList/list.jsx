import React from 'react';
import "../../styles/list.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Todo} from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../redux/slices/users';
import { useAuth } from '../../context/authContext';

function List() {
    const { list } = useSelector(state => state.users);
    const {collections, state} = useAuth()

    const collections23 = [];

    const dispatch = useDispatch();
 
    React.useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    let todos = []

    list.map(user => collections23.push(user))
    if (collections) {
        if (state === "all") {
            collections.forEach(element => {
                let datos = element.datos;
                datos.forEach(todo => todos.push(todo))
            });
        }

    }
    return (
        <div className="list-container">
            <div className="tittle-list">
                <div className="iconTittle">
                    <ShoppingCartIcon />
                </div>
                <div className="texTittle">
                    <div className="tittleList">
                        Buys {state}
                    </div>
                    <div className="describeList">
                        Build any kind of dashboard for any kind of niche
                    </div>
                </div>
            </div>
            <div className="content-container">
                {todos.map((task, index) =>  <Todo key={index} data={task} /> )}
            </div>
        </div>
    );
}

export default List;