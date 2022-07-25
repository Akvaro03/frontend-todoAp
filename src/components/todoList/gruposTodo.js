import React from 'react';
import "../../styles/gruposTodo.css"
import { BsFillArchiveFill } from "react-icons/bs";
import { Button, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';
import { Collection } from "../index"
import AppsIcon from '@mui/icons-material/Apps';

import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

import { fetchAllUsers, handleChange } from '../../redux/slices/users';
import { useDispatch, useSelector } from 'react-redux';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useAuth } from '../../context/authContext';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
function GruposTodo() {
    const {user, loading, handleChange, collections} = useAuth()
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(true);
    const [icon, setIcon] = React.useState(true);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeIcon = (e) => {
        setIcon(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        const color = e.nativeEvent.target[1].value; 
        const newCollection = {
            name,
            color,
            icon
        }
        handleChange(user.email, newCollection)
        collections.forEach(data => console.log(data.nombre))
        // await singUp("user.email", "user.password")     
    }
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
    return (
        <div className="GruposTodo">
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Crear nuevo componente"}</DialogTitle>
                    <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nombre del componente"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeName} 
                        />
                        
                        
                        <div className="divContenedorButton">
                            <div className="divRadioButton">
                                <input onChange={handleChangeIcon} type="radio" name="icon" value="card" />
                                <input onChange={handleChangeIcon} type="radio" name="icon" value="email" />
                                <input onChange={handleChangeIcon} type="radio" name="icon" value="Business" />
                                <input onChange={handleChangeIcon} type="radio" name="icon" value="copie" />
                                <input onChange={handleChangeIcon} type="radio" name="icon" value="stories" />
                                <input onChange={handleChangeIcon} type="radio" name="icon" value="books" />
                            </div>

                            <div className="divRadioButton">
                                <ShoppingCartIcon />
                                <AttachEmailIcon />
                                <BusinessCenterIcon />
                                <AutoAwesomeMotionIcon />
                                <AutoStoriesIcon />
                                <BookmarksIcon />
                            </div>
                        </div>

                    </DialogContent>

                    <DialogActions>
                        <Button type='submit' >Disagree</Button>
                        <Button type='submit' >Agree</Button>
                    </DialogActions>
                    </form>
            </Dialog>

            <div className="nosenosenose">
                <div className="serch">
                    <CssTextField id="outlined-basic" label="Search Tasks" variant="outlined" />
                </div>
                <div className="buttonTodo">
                    <Button variant="outlined" size="large" onClick={handleClickOpen}>Nueva coleccion</Button>        
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
                    {collections && collections.map((colection, index) => <Collection key={index} name={colection.nombre} theme={colection.theme} icon={colection.icon} />)}
                </div>
            </div>
        </div>
    );
}

export default GruposTodo;