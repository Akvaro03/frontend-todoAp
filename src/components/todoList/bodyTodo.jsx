import React from 'react';
import "../../styles/bodyTodo.css"
import {GruposTodo, List} from '../index';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Autocomplete, Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material';
import { useAuth } from '../../context/authContext';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function Autocompletar(options){
    if (!options.loading) {
        return (
        <Autocomplete
        freeSolo
                                    onChange={(event, newValue) => {
                                        options.setCollectionsSelect(newValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={options.data}
                                    sx={{ width: 300 , marginTop: 2 }}
                                    renderInput={(params) => <TextField {...params} label="Controllable" />}
                                    />
    )}
}

function BodyTodo() {
    let datos = []
    const [open, setOpen] = React.useState(false);
    // const [value, setValue] = React.useState(datos[0]);


    const [name, setName] = React.useState("")
    const [collectionsSelect, setCollectionsSelect] = React.useState("")
    const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [time, setTime] = React.useState();

    const {user, collections, loading, submitTodosDatos} = useAuth()

    collections && collections.forEach(function(dato, key) {


        datos.push(dato.nombre)
    })

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };  
    const handleChangeName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const handleDate = (newValue) => {
        setDate(newValue);
    };
    const handleTime = (e) => {
        setTime(e.target.value)
    }



    const submitTodos = (e) => {

        let color = e.nativeEvent.target[4].value; 
        console.log("first")
        let json = {
            name,
            collectionsSelect,
            date,
            color,
            time
        }
        console.log(json)
        e.preventDefault()
        submitTodosDatos(user.email, json)
    }    

    return (
        <div className="containerTodo">
            <GruposTodo />
            <List />
            <div className="buttonPlus" onClick={handleClickOpen}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
            </div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Crear nuevo Todo"}</DialogTitle>
                    <form onSubmit={submitTodos}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            value={name}
                            id="name"
                            label="Nombre del todo"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeName}
                        />
                        
                        {datos && <Autocompletar loading={loading} data={datos} setCollectionsSelect={setCollectionsSelect} />}

                        

                        <div className="divColor">
                        <DialogContentText id="alert-dialog-slide-description">Selecciona el color                        </DialogContentText>
                        <input type="color" name="color"  id=""/>
                        </div>


                        <div className="divContenedorDate">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}           sx={{ marginTop: 2 }}
>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleDate}
          renderInput={(params) => <TextField {...params} />}
        />
        {/* <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Stack>
    </LocalizationProvider>

                        </div>

                        <div className="divContenedorTiem">
                        <TextField
                            id="time"
                            label="Alarm clock"
                            type="time"
                            defaultValue="00:00"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            onChange={handleTime}
                            sx={{ width: 150, marginTop: 2 }}
                        />
                        </div>

                    </DialogContent>

                    <DialogActions>
                        <Button >Disagree</Button>
                        <Button type='submit' >Agree</Button>
                    </DialogActions>
                    </form>
            </Dialog>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={handleClose}
                    >
              <CircularProgress color="inherit" />
            </Backdrop>

        </div>
    );
}

export default BodyTodo;