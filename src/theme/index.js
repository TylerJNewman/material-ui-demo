import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';

const theme = 
  createMuiTheme({
    palette,
    typography: {
      "fontFamily": `"proxima-nova", "Helvetica Neue", "Arial",  "Helvetica", sans-serif`,
    },
    typography,
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: 'white',
        },
      },
      overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontSize: 18,
        },
      },
    },
  },
    },
  });

export default theme;
