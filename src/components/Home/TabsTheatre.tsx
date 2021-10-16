import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CardMedia, Grid } from "@mui/material";

export const TabsTheatre = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={5}>
      <Grid item lg={8} xs={12}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Obras" value="1" />
                <Tab label="Cortometrajes" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item 4</TabPanel>
            <TabPanel value="5">Iteasdasdee</TabPanel>
          </TabContext>
        </Box>
      </Grid>
      <Grid item lg={4} sx={{ display: { xs: "none", lg: "block" } }}>
        <CardMedia
          component="img"
          height="527"
          image="https://images.pexels.com/photos/2769657/pexels-photo-2769657.jpeg"
          alt="Paella dish"
        />
      </Grid>
    </Grid>
  );
};
