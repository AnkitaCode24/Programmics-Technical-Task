import Carousel from 'react-material-ui-carousel';
import React from 'react';
import img1 from '../asset/1.jpg';
import img2 from '../asset/2.jpg';
import img3 from '../asset/3.jpg';
import { Box } from '@mui/material';

const images = [{
    id: 1,
    img: img1
},
{
    id: 2,
    img: img2
},
{
    id: 3,
    img: img3
}
]

export const ImageSlider = () => {
    return (
        <Box sx={{borderRadius:'30px',objectFit:'cover'}}>
            <Carousel>
                {
                   images.map((image, i) => <img key={i} src={image.img} style={{height:'400px',width:'100%'}}/>)
                }
            </Carousel>
        </Box>
    )
}
