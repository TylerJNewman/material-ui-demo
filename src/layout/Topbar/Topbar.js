import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'components/atoms/Link'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Grid,
  Button,
  MenuItem,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Menu from 'material-ui-popup-state/HoverMenu'
import {
  usePopupState,
  bindHover,
  bindMenu
} from 'material-ui-popup-state/hooks'

import { Image } from 'components/atoms'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    paddingRight: 15
  },
  flexGrow: {
    flexGrow: 1
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  toolbar: {
    width: '100vw',
    height: '9.5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark
    }
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark
    }
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark
    }
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap'
  },
  listItemIcon: {
    minWidth: 'auto'
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2)
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark
  },
  logoContainer: {
    height: 25,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center'
  },
  logoImage: {
    width: 170
  },
  menu: {
    boxShadow: 'none'
  },
  menuList: {
    margin: 0,
    padding: 0
  },
  menuItem: {
    color: '#2C596B',
    textTransform: 'none',
    backgroundColor: '#E8EDEF',
    '&:hover': {
      color: 'white',
      backgroundColor: '#436B7B'
    }
  },
  menuGroupItem: {
    paddingTop: 0
  },
  menuGroupTitle: {
    textTransform: 'uppercase'
  },
  menuButton: {
    color: theme.palette.primary.main,
    width: 80,
    marginLeft: 26,
    marginRight: 26,
    textTransform: 'none',
    backgroundColor: 'transparent',
    '&:hover': { cursor: 'pointer' }
  },
  login: {
    color: theme.palette.white,
    marginLeft: 26,
    marginRight: 26,
    paddingLeft: 15,
    paddingRight: 15,
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main
  }
}))

const MenuGroup = ({ pagesGroup }) => {
  const classes = useStyles()
  const handlePopup = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  console.log(pagesGroup)
  return (
    <>
      <Button
        className={classes.menuButton}
        aria-haspopup='true'
        {...bindHover(handlePopup)}
      >
        <Typography
          variant='body1'
          style={{ fontSize: 16 }}
        >
          {pagesGroup.groupTitle}
        </Typography>
      </Button>
      <Menu
        className={classes.menu}
        classes={{
          list: classes.menuList
        }}
        {...bindMenu(handlePopup)}
        getContentAnchorEl={null}
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {pagesGroup.pages.map(({ href, title }, i) => (
          <MenuItem
            key={i}
            className={classes.menuItem}
            onClick={handlePopup.close}
            component={Link}
            href={href}
          >
            <Typography
              variant='body2'
              style={{ fontSize: 14 }}
            >
              {title}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

const Topbar = props => {
  const { onSidebarOpen, onSidebarClose, openSidebar, pages, ...rest } = props

  const classes = useStyles()
  return (
    <AppBar
      {...rest}
      position='fixed'
      className={classes.root}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          justify='center'
          alignItems='center'
        >
          <Grid item xs={4} sm={2} lg={2} className={classes.logoContainer}>
            <Link href='/'>
              <Image
                className={classes.logoImage}
                src='/images/logo.png'
                alt='Logo'
                lazy={false}
              />
            </Link>
          </Grid>
          <Grid
            item
            container
            justify='flex-end'
            alignContent='center'
            xs={7}
            sm={9}
            lg={9}
          >
            <Hidden smDown>
              {pages.map((pagesGroup, i) => (
                <MenuGroup key={i} pagesGroup={pagesGroup} />
              ))}
              <Button className={classes.login}>
                <Typography
                  variant='body1'
                  style={{ fontSize: 16 }}
                >
                Login
                </Typography>
              </Button>
            </Hidden>
            <Hidden mdUp>
              {openSidebar ? (
                <IconButton
                  onClick={onSidebarClose}
                  edge='start'
                  aria-label='Menu'
                >
                  <CloseIcon color='primary' />
                </IconButton>
              ) : (
                <IconButton
                  edge='start'
                  onClick={onSidebarOpen}
                  aria-label='Menu'
                >
                  <MenuIcon color='primary' />
                </IconButton>
              )}

            </Hidden>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  onSidebarClose: PropTypes.func,
  pages: PropTypes.array.isRequired
}

export default Topbar
