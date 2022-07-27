import React from 'react';
import "../../styles/list.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Todo} from '../index';
import { useAuth } from '../../context/authContext';

function List() {
    const {collections, state} = useAuth()
 
    let todos = []
    if (collections !== null ) {
        if (state === "All") {
            collections.forEach(element => {
                let datos = element.datos;
                datos.forEach(todo => todos.push(todo))
            });
        }else if(collections[0].datos){
            let collection = collections.filter(word => word.nombre === state);
            console.log(collections);
            collection[0].datos.forEach(todo => todos.push(todo))
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
                        {state}
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