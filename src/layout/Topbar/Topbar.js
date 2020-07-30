import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  colors,
  Grid
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

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
    maxWidth: 1100,
    width: '100vw',
    height: '9.5vh'
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
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0
  },
  menuGroupTitle: {
    textTransform: 'uppercase'
  }
}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <Link {...props} />
  </div>
))

const Topbar = props => {
  const { onSidebarOpen, onSidebarClose, openSidebar, pages, ...rest } = props

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const [openedPopoverId, setOpenedPopoverId] = useState(null)

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target)
    setOpenedPopoverId(popoverId)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenedPopoverId(null)
  }

  // const landings = pages.landings;
  // const supportedPages = pages.pages;
  // const account = pages.account;

  const MenuGroup = props => {
    const { item } = props
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant='body2'
            color='primary'
            className={classes.menuGroupTitle}
          >
            {item.groupTitle}
          </Typography>
        </ListItem>
        {/* {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body1"
              component={CustomRouterLink}
              to={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textSecondary"
              onClick={handleClose}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))} */}
      </List>
    )
  }

  // const LandingPages = () => {
  //   const { services, apps, web } = landings.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={services} />
  //         <MenuGroup item={apps} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={web} />
  //       </div>
  //     </div>
  //   );
  // };

  // const SupportedPages = () => {
  //   const {
  //     career,
  //     helpCenter,
  //     company,
  //     contact,
  //     blog,
  //     portfolio,
  //   } = supportedPages.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={career} />
  //         <MenuGroup item={helpCenter} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={company} />
  //         <MenuGroup item={contact} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={blog} />
  //         <MenuGroup item={portfolio} />
  //       </div>
  //     </div>
  //   );
  // };

  // const AccountPages = () => {
  //   const { settings, signup, signin, password, error } = account.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={settings} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={signup} />
  //         <MenuGroup item={signin} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={password} />
  //         <MenuGroup item={error} />
  //       </div>
  //     </div>
  //   );
  // };

  // const renderPages = id => {
  //   if (id === 'landing-pages') {
  //     return <LandingPages />;
  //   }
  //   if (id === 'supported-pages') {
  //     return <SupportedPages />;
  //   }
  //   if (id === 'account') {
  //     return <AccountPages />;
  //   }
  // };

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
            <a href='/' title='thefront'>
              <Image
                className={classes.logoImage}
                src='/images/logo.png'
                alt='thefront'
                lazy={false}
              />
            </a>
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
