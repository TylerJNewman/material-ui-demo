import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Grid} from '@material-ui/core'
import {Link} from 'components/atoms'

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
    },
  },
  partnerLogosContainer: {
    height: '15vh',
    marginBottom: theme.spacing(60 / 8),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(75 / 8),
    },
  },
  logo: {
    width: 130,
    filter: 'grayscale(100%) brightness(0%)',
    height: '9.25vh',
    opacity: 0.7,
  },
}))

const Header = ({title}) => {
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.header}>
      <Grid item>
        <Typography color="primary" variant="subtitle2">
          {title}
        </Typography>
      </Grid>
    </Grid>
  )
}
const PartnerLogos = ({data}) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="space-around"
      className={classes.partnerLogosContainer}
    >
      <Grid item container justify="space-between" xs={11} lg={9} />
      {data.map((item, i) => (
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          xs={3}
          md={1}
          key={i}
        >
          <Link href={item.href}>
            <img className={classes.logo} src={item.cover} />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

const Partners = ({data}) => {
  return (
    <>
      <Header title="Trusted by" />
      <PartnerLogos data={data} />
    </>
  )
}

export default Partners
