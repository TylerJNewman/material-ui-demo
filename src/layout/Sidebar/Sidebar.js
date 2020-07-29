import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';

import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '100%',
    height: "calc(100% - 9.5vh)",
    marginTop: "9.5vh",
  },
  drawerRoot: {
    height: "calc(100% - 9.5vh)",
    marginTop: "9.5vh",
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(1),
  },
  nav: {
    marginBottom: theme.spacing(1),
  },
}));

const Sidebar = props => {
  const { pages, open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      hideBackdrop
      classes={{ paper: classes.drawer, root: classes.drawerRoot }}
      onClose={onClose}
      open={open}
      variant={variant}
      elevation={0}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} onClose={onClose} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
