const colors = {
  blue: '#005E89',
  olive: '#665500',
  yellow: '#F4B400',
  red: '#DB4437',
  maroon: '#93180C',
  grays: ['#EEE', '#BBB', '#999', '#666'],
  white: '#FFF',
  blacks: ['#010101', '#212121'],
};

const theme = {
  colors: {
    primary: colors.blue,
    secondary: colors.olive,
    tertiary: colors.maroon,
    quaternary: colors.grays[2],
    text: {
      heading: colors.blacks[0],
      prose: colors.blacks[1],
    },
    background: colors.white,
    ...colors,
  },
  breakpoints: ['640px', '960px'],
  fonts: {
    system: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ],
    serif: ['Georgia', 'serif'],
  },
};

export default theme;
