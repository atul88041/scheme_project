import React from "react";
// import Layout from "./../components/Layout/Layout";
// import Container from "@mui/material/Container";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const SchemeForYou = () => {
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
        <Typography textAlign="center" variant="h5">
          #GOVERMENTSHHEMES / #SCHEMESFORYOU
        </Typography>
        {/* <Stack> */}
        <Button
          sx={{ mt: 3 }}
          variant="contained"
          color="success"
          endIcon={<DoubleArrowIcon />}
        >
          Find Schemes For You
        </Button>
        {/* </Stack> */}
      </Box>
    </Container>
  );
};

export default SchemeForYou;
