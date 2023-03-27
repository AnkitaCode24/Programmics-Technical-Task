import { Grid } from '@mui/material'
import React from 'react'
import { Animated } from '../components/animated'
import { ImageSlider, TopMenuBar } from '../components/imageSlider'
import { Menu } from '../components/menu'
import { News } from '../components/news'
import { PopularShows } from '../components/popularShow'
import { Recommended } from '../components/Recommended'
import { SideBar } from '../components/sideBar'
import { TopMenu } from '../components/TopMenu'

export const LandingPage = () => {
  return (
    <div>
        <TopMenu/>
        <Grid container>
            <Grid item xs={2}>
            <SideBar/>
            </Grid>
            <Grid item xs={10}>
            <ImageSlider/>
            <Menu/>
            <Recommended/>
            <Animated/>
            <PopularShows/>
            <News/>
            </Grid>
        </Grid>
        
    </div>
  )
}
