import React from 'react'
// import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import "../../styles/todo.css"
import Radio from '@mui/material/Radio';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

let restaFechas = function(f1,f2)
{
var aFecha1 = f1.split('/');
var aFecha2 = f2.split('/');
var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
var dif = fFecha2 - fFecha1;
var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
return dias;
}


function Icons(props) {
    const icon = props.icon;
    switch (icon) {
        case "card":
            return <ShoppingCartIcon />;

        case "email":
            return <AttachEmailIcon />;

        case "Business":
            return <BusinessCenterIcon />;
        
        case "copie":
            return <AutoAwesomeMotionIcon />;

        case "stories":
            return <AutoStoriesIcon />;

        case "books":
            return <BookmarksIcon />;

        default:
            break;
    }

    if (icon === 'cart') {
        return <ShoppingCartIcon />;
    } else if (icon === 'business'){
        return <BusinessCenterIcon />;
    } else if (icon === 'email'){
        return <AttachEmailIcon />;
    } else if (icon === 'card'){
        return <AutoAwesomeMotionIcon />;
    } else if (icon === 'copie'){
        return <AttachEmailIcon />;
    } else if (icon === 'stories'){
        return <AutoStoriesIcon />;
    } else if (icon === 'books'){
        return <BookmarksIcon />;
    }

}

export default function Todo(data) {
    const [selectedValue, setSelectedValue] = React.useState('false');

    if (data.data) {

        const datos = data.data

        const handleChange = (event) => {
            selectedValue === "false" ? setSelectedValue("true") : setSelectedValue("false");
        };
        let segundos = datos.date.seconds
        let dayActual = new Date().toLocaleDateString()
        let dayTodo = new Date(segundos * 1000).toLocaleDateString()
        let diferencia = restaFechas(dayActual,dayTodo)

        return (
            <div className="container-list">
                <div className="data">
                    <div className="item">
                        <Radio
                            checked={selectedValue === "true"}
                            onClick={handleChange}
                            value="false"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{color: datos.color, '&.Mui-checked': {
                                color: datos.color,}}}
                        />
                    </div>
                    <div className="texList">
                        {datos.name}
                    </div>
                </div>
                <div className="extras">
                    <div className="collection">
                        <Icons icon={datos.icon}/>
                        <div className="texCollection">
                            <p>{datos.collectionsSelect}</p>
                        </div>
                    </div>
                    <div className="date">
                        <h3>{`Faltan ${diferencia} dias`}</h3>
                        <p>{datos.time}</p>
                    </div>
                </div>
            </div>
        );
    
    } 
}