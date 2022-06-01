import React from 'react';
import "../../styles/gruposTodo.css"
import { BsFillArchiveFill } from "react-icons/bs";
import { Button } from '@mui/material';
import { Collection } from "../index"
import AppsIcon from '@mui/icons-material/Apps';

import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';


function GruposTodo() {
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#1976d2',
            transition: "all 0.2s",
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#1900d2',
            transition: "all 0.2s",
        },
        "& label": {
            color: "#1976d2"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: '#1976d2',
            transition: "all 0.2s",
            color : "#1976d2"
            },
            '&:hover fieldset': {
                borderColor: 'violet',
                transition: "all 0.2s",
            },          
            '&.Mui-focused fieldset': {
            borderColor: '#1976d2',
            transition: "all 0.2s",
        },
        },
        '& .MuiInputBase-input': {
            color:"white"
        }
    });
    let collection1 = {
        name:"Buys",
        theme:"white",
        id: 1,
        icon: "cart"
    }
    let collection2 = {
        name:"Thinks to do",
        theme:"grey",
        id: 2,
        icon: "copie"
    }
    let collection3 = {
        name:"Work",
        theme:"grey",
        id: 3,
        icon: "Business"
    }

    let collections = [collection1, collection2, collection3]

    return (
        <div className="GruposTodo">
            <div className="nosenosenose">
                <div className="serch">
                    <CssTextField id="outlined-basic" label="Search Tasks" variant="outlined" />
                </div>
                <div className="buttonTodo">
                    <Button variant="outlined" size="large">Nueva coleccion</Button>        
                </div>
                <div className="all">
                    <AppsIcon style={{ color: "grey" }}  />
                    <p className="text-list" >All tasks</p>
                </div>
                <div className="title-todo">
                    <div>
                        <BsFillArchiveFill />
                    </div>
                        <h3 className="">Reminders</h3>
                </div>
                <div className="tasks-list">
                    {collections.map(colection => <Collection key={colection.id} name={colection.name} theme={colection.theme} icon={colection.icon} />)}
                </div>
            </div>
        </div>
    );
}

export default GruposTodo;