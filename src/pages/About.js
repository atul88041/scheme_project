import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4" textAlign="start">About</Typography>
        <p>
        myScheme is a National Platform that aims to offer one-stop search 
        and discovery of the Government schemes.
        </p>
        <br />
        <p>
          
        </p>
      </Box>
    </Layout>
  );
};

export default About;
