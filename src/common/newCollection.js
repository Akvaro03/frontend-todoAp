import { Slide, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "../styles/newCollection.css"

function NewCollection(props) {
    console.log(props)
    console.log(props.open)
    if (props.open) {
        return (
            <div className="container-slice" >
                <Slide direction="up" in={props.open} onClick={props.close} mountOnEnter unmountOnExit>
                <div className="NewCollection">
                <div className="titleNew">
                    <h3>Nueva coleccion</h3>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                </Box>
    
                </div>
                </Slide>
            </div>
        );
    
    }
}

export default NewCollection;