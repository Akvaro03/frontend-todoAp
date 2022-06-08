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
 
function GruposTodo() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
                setOpen(false)            
    };
    
    const handleToggle = () => {
        setOpen(!open);
    };

    const { list: users } = useSelector(state => state.users);
    const { list2: hola } = useSelector(state => state.users);

    const collections23 = [];

    const dispatch = useDispatch();


    React.useEffect(() => {
        const newUser = [
            {
                "name":"Buys",
                "icon":"cart",
                "theme":"white",
                "active": false,
                "collection":[
                    {
                        "name":"Comprar componentes",
                        "color":"black",
                        "collection":"Buys",
                        "day":"Today",
                        "time":"11:00 AM"
                    },
                    {
                        "name":"Comprar autos",
                        "color":"red",
                        "collection":"work",
                        "day":"Tomorrow",
                        "time":"6:00 PM"
                    },
                    {
                        "name":"Comprar falopa",
                        "color":"red",
                        "collection":"work",
                        "day":"Tomorrow",
                        "time":"6:00 PM"
                    }
                ]
            }
        ]
    
        dispatch(fetchAllUsers());
        dispatch(handleChange(newUser))
        console.log()
    }, [dispatch])
    hola.map(user => console.log(user))
    users.map(user => collections23.push(user))
    
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
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide mountOnEnter  direction="up" ref={ref} {...props} />;
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
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
    </Dialog>

            <div className="nosenosenose">
                <div className="serch">
                    <CssTextField id="outlined-basic" label="Search Tasks" variant="outlined" />
                </div>
                <div className="buttonTodo">
                    <Button variant="outlined" size="large" onClick={handleToggle}>Nueva coleccion</Button>        
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
                    {collections23.map((colection, index) => <Collection key={index} name={colection.name} theme={colection.theme} icon={colection.icon} />)}
                </div>
            </div>
        </div>
    );
}

export default GruposTodo;