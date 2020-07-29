import React, { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.primary.main
  },
  menu: {
    display: 'flex'
  },
  nestedMenuItem: {
    paddingLeft: theme.spacing(4)
  },
  navigationContainer: {
    padding: 20
  },
  nestedMenuItemExpanded: {
    color: '#14465A'
  }

}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <Link {...props} />
  </div>
))

const NestListItem = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Inbox' className={open ? classes.nestedMenuItemExpanded : null} />
        {open ? <ExpandLess className={classes.nestedMenuItemExpanded} /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button className={classes.nestedMenuItem}>
            <ListItemText primary='Starred' className={open ? classes.nestedMenuItemExpanded : null} />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props
  const classes = useStyles()

  return (
    <div className={classes.navigationContainer}>
      <List {...rest} className={clsx(classes.root, className)}>
        <ListItem button>
          <ListItemText primary='Spam' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Spam' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Spam' />
        </ListItem>
        <NestListItem />
      </List>
    </div>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func
}

export default SidebarNav
