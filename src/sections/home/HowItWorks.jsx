// import React from 'react';
// import {
//   Container,
//   Typography,
//   Button,
//   TextField,
//   Grid,
//   makeStyles,
// } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const HowItWorks = () => {
//   const classes = useStyles();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//   };

//   return (
//     <Container component="main" maxWidth="xs" className={classes.root}>
//       <Typography component="h1" variant="h5">
//         Enter Details
//       </Typography>
//       <form className={classes.form} noValidate onSubmit={handleSubmit}>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="name"
//           label="Name"
//           name="name"
//           autoComplete="name"
//           autoFocus
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           className={classes.submit}
//         >
//           Start by entering your basic details!
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default HowItWorks;

import React from "react";
// import Layout from "./../components/Layout/Layout";
// import Container from "@mui/material/Container";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const HowItWorks = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          textAlign="center"
          variant="h6"
          font-size="1.1rem"
          line-height="1.75rem"
          color={"gray"}
        >
          How it works
        </Typography>
        {/* <Stack> */}
        <Typography textAlign="center" font-size="2.5rem" sx={{fontWeight:600}} variant="h4">
          Easy steps to apply for Government Schemes
        </Typography>

        {/* </Stack> */}
      </Box>
    </Container>
  );
};

export default HowItWorks;
