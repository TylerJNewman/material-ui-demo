/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import Link from 'next/link'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.primary.main,
    // padding: theme.spacing(4.5)
  },
  listItem: {
    color: "inherit"
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
nestedMenuItem: {
  paddingLeft: theme.spacing(4)
},
navigationContainer: {
  padding: 20
},
nestedMenuItemExpanded: {
 color:  "#14465A"
}

}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <Link {...props} />
  </div>
));

const NestListItem = props => {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (      <><ListItem className={classes.ListItem} button onClick={handleClick}>
        <ListItemText primary="Inbox"className={open ? classes.nestedMenuItemExpanded : null} />
        {open ? <ExpandLess className={classes.nestedMenuItemExpanded }/> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.ListItem} button className={classes.nestedMenuItem}>
            <ListItemText primary="Starred"  className={open ? classes.nestedMenuItemExpanded : null}/>
          </ListItem>
        </List>
      </Collapse>
  </>)
}

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.navigationContainer}>
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.ListItem} gutters button>
        <ListItemText primary="Spam" />
      </ListItem>
        <ListItem className={classes.ListItem} gutters button>
      <ListItemText primary="Spam" />
        </ListItem>
      <ListItem className={classes.ListItem} gutters button>
        <ListItemText primary="Spam" />
      </ListItem>
      <NestListItem/>
    </List>
    </div>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
