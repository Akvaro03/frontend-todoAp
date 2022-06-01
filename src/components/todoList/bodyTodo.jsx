import React from 'react';
import "../../styles/bodyTodo.css"
import {GruposTodo, List} from '../index';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function BodyTodo() {
    return (
        <div className="containerTodo">
            <GruposTodo />
            <List />
            <div className="buttonPlus">
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
            </div>
        </div>
    );
}

export default BodyTodo;