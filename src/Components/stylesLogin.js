import {
    makeStyles,
  } from '@mui/styles';

const useStyles = makeStyles({
    outerContainer: {
      width: '110%',
      marginTop: "8rem", // Add margin from the top (16 pixels)
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 24, // Adjust padding to 24 pixels
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adjust the box shadow
    },
    form: {
      width: '100%',
    },
    submit: {
      margin: '24px 0 16px', // Adjust margin to 24 pixels top, 0 right/left, 16 pixels bottom
    },
    secondaryButton: {
      margin: '8px 0', // Adjust margin to 8 pixels top/bottom, 0 right/left
    },
  });

  export default useStyles;