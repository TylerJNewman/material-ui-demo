import React, { forwardRef } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem
} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import PinterestIcon from '@material-ui/icons/Pinterest'

import { Image } from 'components/atoms'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0)
    },
    background: '#FF6E5A'
  },
  footerContainer: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2)
  },
  logoContainerItem: {
    paddingTop: 0
  },
  logoContainer: {
    width: 120,
    height: 32
  },
  logoImage: {
    height: 20,
    marginBottom: 50
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1)
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent'
    },
    '&:last-child': {
      marginRight: 0
    }
  },
  icon: {
    fontSize: 24
  },
  menuListContainer: {
    padding: '0 !important'
  },
  menu: {
    display: 'flex'
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0
    }
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white'
  },
  divider: {
    width: '100%'
  },
  navLink: {
    color: 'rgba(255,255,255,.6)'
  }
}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <Link {...props} />
  </div>
))

const Footer = props => {
  const { pages, className, ...rest } = props

  const classes = useStyles()

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href='/' title='thefront'>
                    <Image
                      className={classes.logoImage}
                      src='/images/logo-negative.png'
                      alt='thefront'
                      lazy={false}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item className={classes.listItem} />
              <Grid item className={classes.listItem} />
              <Grid item className={classes.listItem} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
}

export default Footer
