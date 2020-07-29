import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  alternate: 'rgb(247, 249, 250)',
  secondary: {
    main: '#FF6E5A',
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    margin: 0,
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: '#FFF',
    paper: white,
  },
  icon: '#FF6E5A',
  divider: colors.grey[200],
};