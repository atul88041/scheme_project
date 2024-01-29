import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Container, Button, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function HowToApplyCard() {
  return (
    <Container sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        
        }}
      >
        <Stack spacing={10} direction='row'>
        <Paper
          sx={{
            width:"100%",
            p: 4,
            bgcolor: "#eefcfb",
            borderRadius: 5,
            transition: "background-color 0.3s ease", // Add transition property
            "&:hover": {
              bgcolor: "#d6f2e9", // Change background color on hover
            },
          }}
        >
          <Typography textAlign="center" variant="h4">
            Enter Details
          </Typography>
          <Typography textAlign="center" variant="subtitle1">
            Start by entering your basic details! 
          </Typography>
        </Paper>
        <Paper
          sx={{
            width:"100%",
            p: 4,
            bgcolor: "#e6f8eb",
            borderRadius: 5,
            transition: "background-color 0.3s ease",
            "&:hover": {
              bgcolor: "#d6f2e9",
            },
          }}
        >
          <Typography textAlign="center" variant="h4">
            Search
          </Typography>
          <Typography textAlign="center" variant="subtitle1">
            Our search engine will find the relevant schemes! 
          </Typography>
        </Paper>
        <Paper
          sx={{
            width:"100%",
            p: 4,
            bgcolor: "#e6f8eb",
            borderRadius: 5,
            transition: "background-color 0.3s ease",
            "&:hover": {
              bgcolor: "#d6f2e9",
            },
          }}
        >
          <Typography textAlign="center" variant="h4">
            Select & Apply
          </Typography>
          <Typography textAlign="center" variant="subtitle1">
            Select and apply for the best suited scheme
          </Typography>
        </Paper>
        </Stack>
      </Box>
    </Container>
  );
}