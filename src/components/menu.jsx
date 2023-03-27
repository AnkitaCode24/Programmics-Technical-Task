import { Box } from '@mui/material';
import React, { useState } from 'react'
import image from '../asset/1.jpg';

const menuItem =[{
    id:1,
    label:'Home'
},
{
    id:1,
    label:'Shows'
},
{
    id:1,
    label:'Movies'
},
{
    id:1,
    label:'Comedy'
},
{
    id:1,
    label:'News'
}]

export const Menu = () => {
    const [hover, setHover] = useState(false)
    const onHover = (e) => {
        e.preventDefault();
        setHover(true); // turn true
        console.log("hovered");
    };

    const onHoverOver = (e) => {
        e.preventDefault(); // turn false
        setHover(false);
    };
    return (
        <>
            <Box style={{ display: 'flex', alignItems: 'center', color: 'white', backgroundColor: 'rebeccapurple' }}>
                {
                    menuItem.map((item)=>{
                        return(
                            <Box sx={{ mr: 'auto', p: 2 }} onMouseEnter={(e) => onHover(e)}
                            onMouseLeave={(e) => onHoverOver(e)}>{item.label}</Box>
                        )
                    })
                }
            </Box>
            {
                hover &&
                <img
                    alt=""
                    src={image}
                    className="img-responsive"
                />
            }

        </>

    )
}
