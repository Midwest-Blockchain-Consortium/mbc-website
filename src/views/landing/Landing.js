import React, { useEffect } from 'react'

import { Typography, Grid, GridList, GridListTile, Paper} from '@material-ui/core'
import { createUseStyles } from 'react-jss'

import { Fade } from 'react-slideshow-image'


import styles from '../../styles/landing/Landing'

import EventFeed from './EventFeed'

import content from './Content'


const useStyles = createUseStyles(styles)


const ImageSlider = () => {
  const classes = useStyles()
  const images = [
    { url: 'https://i.imgur.com/fsB5TAn.jpg' },
    { url: 'https://i.imgur.com/ZBaxWPe.jpg' },
    { url: 'https://i.imgur.com/insWI6r.jpg' },
    { url: 'https://i.imgur.com/05f9jC3.png' },
  ]

  const settings = {
    duration: 3500,
    transitionDuration: 500,
    infinite: true,
    indications: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
    }
  }

  return (
    <GridList cellHeight={400} cols={1} spacing={0} >
      <GridListTile>

        <Fade {...settings}>
          {images.map(image => (
            <img width='1000em' src={image.url}></img>
          ))} 
        </Fade>
      </GridListTile>

    </GridList>

  )
}

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={8} lg={9} xl={10}>
          <Grid item>
            <div className={classes.spacer}/>
            <ImageSlider />
          </Grid>
          <Grid item>
            <Paper className={classes.about} elevation={15}>
              <Typography className={classes.aboutText} variant='h6'>{content.about}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
          <div className={classes.spacer}/>

          <Paper elevation={20}>
            <Typography className={classes.events} variant='h3'>Upcoming Events</Typography>
            <EventFeed></EventFeed>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}


export default Landing
