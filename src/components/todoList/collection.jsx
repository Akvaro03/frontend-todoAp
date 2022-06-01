import React from 'react'
import useIcons from "../../hooks/useIcons"

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import Badge from '@mui/material/Badge';
const StyledBadge = styled(Badge)(({ border }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${border}`,
        padding: '0 4px',
        background: "#0A1929",
        color: `${border}`
    },
}));



function Collection({name, theme, icon}) {
    const [handleIcon] = useIcons()

    let configuracion = {};
    if (theme === "white") {
        configuracion = {
            background: "inherit"
        }
    }
    
    return (
        <div className="list list-active" style={configuracion}>
            <div className="icon-list">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} border={theme} color="secondary">
                        {handleIcon(icon, theme)}
                    </StyledBadge>
                </IconButton>
            </div>
            <p className="text-list" style={{ color: theme}}>{name}</p>
        </div>

    );
}

export default Collection;