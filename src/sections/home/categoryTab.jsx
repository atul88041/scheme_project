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
import { Grid } from "@mui/material";


const schemeData = [
  {
    "image": image,
    "schemeCount": 195,
    "name": "Agriculture, Rural & Environment",
    "subtitle": "195 Scheme"
  },
  {
    "image": image1,
    "schemeCount": 116,
    "name": "Banking, Financial Services and Insurance",
    "subtitle": "116 Scheme"
  },
  {
    "image": image2,
    "schemeCount": 174,
    "name": "Business & Entrepreneurship",
    "subtitle": "174 Scheme"
  },
  {
    "image": image3,
    "schemeCount": 427,
    "name": "Education & Learning",
    "subtitle": "427 Scheme"
  },
  {
    "image": image4,
    "schemeCount": 101,
    "name": "Health & Wellness",
    "subtitle": "101 Scheme"
  },
  {
    "image": image5,
    "schemeCount": 36,
    "name": "Housing & Shelter",
    "subtitle": "36 Scheme"
  },
  {
    "image": image6,
    "schemeCount": 7,
    "name": "Public Safety, Law & Justice",
    "subtitle": "7 Scheme"
  },
  {
    "image": image7,
    "schemeCount": 49,
    "name": "Science, IT & Communications",
    "subtitle": "49 Scheme"
  },
  {
    "image": image8,
    "schemeCount": 109,
    "name": "Skills & Employment",
    "subtitle": "109 Scheme"
  },
  {
    "image": image9,
    "schemeCount": 568,
    "name": "Social Welfare & Empowerment",
    "subtitle": "568 Scheme"
  },
  {
    "image": image10,
    "schemeCount": 68,
    "name": "Sports & Culture",
    "subtitle": "68 Scheme"
  },
  {
    "image": image11,
    "schemeCount": 27,
    "name": "Transport & Infrastructure",
    "subtitle": "27 Scheme"
  },
  {
    "image": image12,
    "schemeCount": 16,
    "name": "Travel & Tourism",
    "subtitle": "16 Scheme"
  },
  {
    "image": image13,
    "schemeCount": 29,
    "name": "Utility & Sanitation",
    "subtitle": "29 Scheme"
  },
  {
    "image": image14,
    "schemeCount": 182,
    "name": "Women and Child",
    "subtitle": "182 Scheme"
  }
]
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
          <Grid spacing={2} container mt={2} >
            
         
            {schemeData.map((scheme, index) => (
        <Grid key={index} item md={3} xs={6} p={2} sx={{display:"flex",justifyContent:"center"}}>
          <Stack maxWidth={200}>
            <img
              style={{   height: "50px",
              width: "50px",
              display: "block",
              margin: "auto", }}
              src={scheme.image}
              alt="logo"
            />
            <Typography textAlign='center' variant="subtitle1">{scheme.subtitle}</Typography>
            <Typography textAlign='center' variant="subtitle2">{scheme.name}</Typography>
          </Stack>
            </Grid>
            ))}
          </Grid>
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
