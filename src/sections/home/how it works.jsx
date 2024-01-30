import React from "react";
import Paper from "@mui/material/Paper";
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
          fontWeight={"bold"}
        >
          How it works
        </Typography>

        <Typography
          textAlign="center" 
          font-size="2.5rem" 
          sx={{fontWeight:600}} 
          variant="h4"
          marginTop="20px"
          >
        Simple procedures for accessing <br /> Government Schemes.
        </Typography>

        <Stack spacing={12} direction='row' marginTop="50px">
        <Paper
          sx={{
            width:"100%",
            p: 4,
            bgcolor: "#eefcfb",
            borderRadius: 17,
            transition: "background-color 0.1s ease", // Add transition property
            "&:hover": {
              bgcolor: "#dafff6", // Change background color on hover
            },
          }}
        >          
          <Typography textAlign="center" variant="h4" padding="10px">
          Begin the process
          </Typography>
          <Typography textAlign="center" variant="subtitle1" padding="10px">
           by providing your essential information! 
          </Typography>
        </Paper>

        
        <div style={{ position: 'relative', margin: '0 10px' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          width: '20px',
          height: '20px',
          background: '#45f8a8',
          border: '2px solid #000',
          borderTop: '0',
          borderRight: '0',
          transform: 'translate(-50%, -50%) rotate(219deg)',
          marginLeft: "97px"
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120px',
          height: '2px',
          background: '#000',
          transform: 'translate(-10%, -50%)',
        }}
      ></div>
    </div>  


        <Paper
          sx={{
            width:"100%",
            p: 4,
            bgcolor: "#eefcfb",
            borderRadius: 17,
            transition: "background-color 0.3s ease", // Add transition property
            "&:hover": {
              bgcolor: "#b9cee9", // Change background color on hover
            },
          }}
        >          
          <Typography textAlign="center" variant="h4">
          Explore our search
          </Typography>
          <Typography textAlign="center" variant="subtitle1" padding="17px">
          Find the right schemes with our search engine!  
          </Typography>
        </Paper>

        
    <div style={{ position: 'relative', margin: '0 10px' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          width: '20px',
          height: '20px',
          background: '#45f8a8',
          border: '2px solid #000',
          borderTop: '0',
          borderRight: '0',
          transform: 'translate(-50%, -50%) rotate(219deg)',
          marginLeft: "97px"
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120px',
          height: '2px',
          background: '#000',
          transform: 'translate(-10%, -50%)',
        }}
      ></div>
    </div>


          <Paper
          sx={{
            width:"100%",
            p: 4,
            bgcolor: "#eefcfb",
            borderRadius: 17,
            transition: "background-color 0.3s ease", // Add transition property
            "&:hover": {
              bgcolor: "#b9cee9", // Change background color on hover
            },
          }}
        >          
          <Typography textAlign="center" variant="h4" padding="4px">
          Choose and apply 
          </Typography>
          <Typography textAlign="center" variant="subtitle1" padding="17px">
          for the most suitable scheme effortlessly!! 
          </Typography>
        </Paper>

        </Stack>
      </Box>
    </Container>
  );
};

export default HowItWorks;


