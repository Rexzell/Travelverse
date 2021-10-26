import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return(
    <AppBar className={classes.container} position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travelverse
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;