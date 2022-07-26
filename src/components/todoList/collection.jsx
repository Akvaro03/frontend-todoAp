import React from 'react'
import useIcons from "../../hooks/useIcons"

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import Badge from '@mui/material/Badge';
import { handleChange } from '../../redux/slices/users';
import { useDispatch } from 'react-redux';
const StyledBadge = styled(Badge)(({ border }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${border}`,
        padding: '0 4px',
        background: "#0A1929",
        color: `${border}`
    },
}));



function Collection({name, theme, icon,datos}) {
    const [handleIcon] = useIcons()
    const dispatch = useDispatch();
    let cambiarEstado = () => {
        dispatch(handleChange("hola"));
    }
    let configuracion = {};
    if (theme === "white") {
        configuracion = {
            background: "inherit"
        }
    }
    
    return (
        <div className="list list-active" style={configuracion} onClick={cambiarEstado}>
            <div className="icon-list">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={datos.length} border={theme} color="secondary">
                        {handleIcon(icon, theme)}
                    </StyledBadge>
                </IconButton>
            </div>
            <p className="text-list" style={{ color: theme}}>{name}</p>
        </div>

    );
}

export default Collection;