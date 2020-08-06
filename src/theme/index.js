import { createMuiTheme } from '@material-ui/core'

import palette from './palette'
import typography from './typography'

const theme =
  createMuiTheme({
    palette,
    typography: {
      fontFamily: 'proxima-nova,Helvetica Neue,Arial,Helvetica,sans-serif',
      ...typography
    },
    button: {
      fontFamily: 'inherit'
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100
    },
    shape: {
      borderRadius: 0
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: 'white'
        }
      },
      MuiCssBaseline: {
        '@global': {
          html: {
            fontSize: 18
          },
          button: {
            fontFamily: 'inherit'
          },
          img: {
            maxWidth: '100%',
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            padding: 0,
            borderStyle: 'none'
          }
        }
      }

    }
  })

export default theme
