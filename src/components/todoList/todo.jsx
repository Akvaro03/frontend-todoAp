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
function Icons(props) {
    const icon = props.icon;

    switch (icon) {
        case "cart":
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
    }
}

export default function Todo(data) {
    const datos = data.data
    const [selectedValue, setSelectedValue] = React.useState('false');

    const handleChange = (event) => {
        selectedValue === "false" ? setSelectedValue("true") : setSelectedValue("false");
    };
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
                        <p>{datos.collection}</p>
                    </div>
                </div>
                <div className="date">
                    <h3>{datos.day}</h3>
                    <p>{datos.time}</p>
                </div>
            </div>
        </div>
    );
}