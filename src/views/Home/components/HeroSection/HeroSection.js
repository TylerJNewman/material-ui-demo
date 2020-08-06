import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, Grid, Slide } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '12%'
  },
  container: {
    background: '#14465A'
  },
  textContainer: {
    width: '100%',
    padding: '5%',
    minHeight: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '10% 2%'
    }
  },
  heroTextHeading: {
    color: '#FFFF',
    padding: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      fontSize: theme.spacing(30 / 8)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(20 / 8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(20 / 8),
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(18 / 8)
    },
    '@media (min-width: 350px)': {
      fontSize: theme.spacing(36 / 8)
    }
  },
  heroText: {
    color: '#FFFF',
    padding: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      fontSize: theme.spacing(15 / 8)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(16 / 8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(14 / 8),
      textAlign: 'center'
    }
  },
  heroImageLargeContainer: {
    top: 100,
    display: 'flex',
    padding: '2%',
    position: 'relative',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      top: 60
    },
    [theme.breakpoints.down('md')]: {
      top: 0
    }
  },
  heroImageLarge: {
    width: '100%',
    minHeight: '100%'
  },
  heroImageSmall: {
    [theme.breakpoints.down('md')]: {
      bottom: '10%',
      position: 'relative'
    },
    width: '100%',
    minHeight: '100%'
  }
}))

const ImageComponentLarge = () => {
  const classes = useStyles()

  return (
    <Grid
      item
      md={8}
      lg={7}
      style={{ minHeight: '100%' }}
    >
      <Grid
        container
        alignItems='center'
        alignContent='center'
        style={{ minHeight: '100%' }}
      >
        <Grid
          item xs={12}
          lg={11}
          className={classes.heroImageLargeContainer}
        >
          <Slide
            direction='left'
            mountOnEnter
            in
          >
            <img
              className={classes.heroImageLarge}
              alt='AppImage'
              src='/images/platform-homepage.svg'
            />
          </Slide>

        </Grid>
      </Grid>
    </Grid>
  )
}

const ImageComponentSmall = () => {
  const classes = useStyles()
  return (
    <Grid
      item
      xs={9}
    >
      <Slide
        direction='left'
        mountOnEnter
        in
      >
        <img
          className={classes.heroImageSmall}
          alt='AppImage'
          src='/images/platform-homepage.svg'
        />
      </Slide>
    </Grid>
  )
}

const HeroSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  const largeView = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Grid
      container
      alignContent='center'
      justify='center'
      className={classes.root}
    >
      <Grid
        item
        className={classes.container}
        xs={12}
      >
        <Grid container justify='center'>
          <Grid
            item
            xs={11}
            md={4}
            lg={5}
            className={classes.textContainer}
          >
            <Grid
              container
              alignItems='center'
              alignContent='center'
              justify='flex-end'
              style={{ minHeight: '100%' }}
            >
              <Grid
                item
                xs={12}
                lg={9}
              >
                <Typography
                  variant='h1'
                  className={classes.heroTextHeading}
                >
                  Start targeting your audiences better with market research 2.0
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={9}
              >
                <Typography
                  variant='body1'
                  className={classes.heroText}
                >
                  focaldata is an end to end solution for understanding public opinion and moving people to action. Whether you're launching a campaign or tracking your brand, our platform goes deeper and gives you the detail you need to thrive.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {largeView && <ImageComponentLarge />}
        </Grid>
      </Grid>
      {!largeView && <ImageComponentSmall />}
    </Grid>
  )
}

export default HeroSection
