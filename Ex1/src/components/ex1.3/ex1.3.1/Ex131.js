import React from "react";
import "typeface-roboto";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const tabContentStyle = {
  padding: 16,
};

function TabPanel({ value, index, children }) {
  return value === index && <div style={tabContentStyle}>{children}</div>;
}

export default function Ex131() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h3 style={{ color: "red" }}>Ex 1.3.1</h3>
      <Router>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} justifyContent="center">
            <Tab label="Item One" component={Link} to="/" />
            <Tab label="Item Two" component={Link} to="/page2" />
            <Tab label="Item Three" component={Link} to="/page3" />
          </Tabs>
        </AppBar>

        <Routes>
          <Route
            path="/"
            element={
              <TabPanel value={value} index={0}>
                <Typography component="div">Item One Content</Typography>
              </TabPanel>
            }
          />
          <Route
            path="/page2"
            element={
              <TabPanel value={value} index={1}>
                <Typography component="div">Item Two Content</Typography>
              </TabPanel>
            }
          />
          <Route
            path="/page3"
            element={
              <TabPanel value={value} index={2}>
                <Typography component="div">Item Three Content</Typography>
              </TabPanel>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
