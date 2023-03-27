import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import img1 from '../asset/1.jpg';
import img2 from '../asset/2.jpg';
import img3 from '../asset/3.jpg';
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
export const News = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'start', mt: 2 }}>  <Typography variant='h5'>News and Upcoming</Typography></Box>
            <Grid container spacing={3}>
                {
                    images.map((image) => {
                        return (
                            <Grid item xs={4}>
                                
                                <Card sx={{ height: '200px', objectFit: 'cover' }} onClick={() => setToggle(!toggle)} >
                                    <img src={image.img} style={{ width: '100%' }} />
                                </Card>
                            </Grid>
                        )
                    })
                }
                {toggle && (
                    <ul class="list-group">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                )}
            </Grid>
        </>
    )
}
