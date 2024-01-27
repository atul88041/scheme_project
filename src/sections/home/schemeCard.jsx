import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Container, Button, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function SchemeCard() {
  return (
    <Container sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          //   p: 6,
          "& > :not(style)": {
            m: 1,
            width: "auto",
            height: 128,
          },
        }}
      >
        <Paper sx={{ p: 4, bgcolor: "#e6f8eb", borderRadius: 5 }}>
          <Typography textAlign="center" variant="h4">
            1470 +
          </Typography>
          <Typography textAlign="center" variant="subtitle1">
            Total Schemes <DoubleArrowIcon sx={{ verticalAlign: "middle" }} />
          </Typography>
        </Paper>
        <Paper sx={{ p: 4, bgcolor: "#e6f8eb", borderRadius: 5 }}>
          <Typography textAlign="center" variant="h4">
            500 +
          </Typography>
          <Typography textAlign="center" variant="subtitle1">
            Central Schemes <DoubleArrowIcon sx={{ verticalAlign: "middle" }} />
          </Typography>
        </Paper>
        <Paper sx={{ p: 4, bgcolor: "#e6f8eb", borderRadius: 5 }}>
          <Typography textAlign="center" variant="h4">
            970 +
          </Typography>
          <Typography textAlign="center" variant="subtitle1">
            State/UTs Schemes{" "}
            <DoubleArrowIcon sx={{ verticalAlign: "middle" }} />
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
