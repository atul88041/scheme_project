import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import image from "../../images/Agriculture.svg";
import image1 from "../../images/Banking.svg";
import image2 from "../../images/Business.svg";
import image3 from "../../images/Education.svg";
import image4 from "../../images/Health.svg";
import image5 from "../../images/Housing.svg";
import image6 from "../../images/Public Safety.svg";
import image7 from "../../images/Science.svg";
import image8 from "../../images/Skills.svg";
import image9 from "../../images/Social Welfare.svg";
import image10 from "../../images/Sports.svg";
import image11 from "../../images/Transport.svg";
import image12 from "../../images/Travel.svg";
import image13 from "../../images/Utility.svg";
import image14 from "../../images/Women.svg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SchemeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Stack direction="column">
        <Stack>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              textColor="primary"
              indicatorColor="primary"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Categories" {...a11yProps(0)} />
              <Tab label="States/UTs" {...a11yProps(1)} />
              <Tab label="Central Ministries" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Stack>
        <Stack>
          <CustomTabPanel value={value} index={0}>
            <Box>
              <Typography textAlign="center" variant="h5">
                Find schemes based on categories
              </Typography>
              <Stack direction="row" spacing={3}>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">195 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Agriculture,Rural & Environment
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image1}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">116 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Banking,Financial Services and Insurance
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image2}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">174 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Business & Entrepreneurship
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image3}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">427 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Education & Learning
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image4}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">101 Scheme</Typography>
                  <Typography variant="subtitle2">Health & Wellness</Typography>
                </Stack>
              </Stack>
              <br />
              <Stack direction="row" spacing={3}>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image5}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">36 Scheme</Typography>
                  <Typography variant="subtitle2">Housing & Shelter</Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image6}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">7 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Public Safety,Law & Justice
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image7}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">49 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Science, IT & Communications
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image8}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">109 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Skills & Employment
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image9}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">568 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Social welfare & Empowerment
                  </Typography>
                </Stack>
              </Stack>
              <br />
              <Stack direction="row" spacing={3}>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image10}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">68 Scheme</Typography>
                  <Typography variant="subtitle2">Sports & Culture</Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image11}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">27 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Transport & Infrastructure
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image12}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">16 Scheme</Typography>
                  <Typography variant="subtitle2">Travel & Tourism</Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image13}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">29 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Utility & Sanitation
                  </Typography>
                </Stack>
                <Stack maxWidth={200}>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={image14}
                    alt="logo"
                  />
                  <Typography variant="subtitle1">182 Scheme</Typography>
                  <Typography variant="subtitle2">
                    Women and Child
                    </Typography>
                </Stack>
              </Stack>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5">
                Explore schemes of States/UTs
              </Typography>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5">
                Explore schemes of Central Schemes
              </Typography>
            </Box>
          </CustomTabPanel>
        </Stack>
      </Stack>
    </Box>
  );
}
