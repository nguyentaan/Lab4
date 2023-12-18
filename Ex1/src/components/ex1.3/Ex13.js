import "typeface-roboto";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import One from "./One";
import Second from "./Second";
import Third from "./Third";

export default function Ex13({ links }) {
  const [open, setOpen] = useState(false);
  function toggleDrawer({ type, key }) {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }
    setOpen(!open);
  }
  return (
    <>
      <h3 style={{ color: "red" }}>Ex 1.3</h3>
      <Router>
        <Button onClick={toggleDrawer}>Open Nav</Button>
        <section>
          <Routes>
            <Route path="/one" element={<One />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
          </Routes>
        </section>
        <Drawer open={open} onClose={toggleDrawer}>
          <div
            style={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {links.map((link) => (
                <ListItem button key={link.url} component={Link} to={link.url}>
                  <ListItemText primary={link.name} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Router>
    </>
  );
}

Ex13.defaultProps = {
  links: [
    { url: "/first", name: "First Page" },
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" },
  ],
};
