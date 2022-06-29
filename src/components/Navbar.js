import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "rgb(18,32,27)",
    margin: 0,
  },
  toolBar: {
    display: "fixed",
    top: "0",
    width: "100vw",
  },
  menu: {
    color: "tomato",
    fontSize: "2.5rem",
  },
  menuSliderContainer: {
    width: "100%",
    background: "rgb(18,32,27)",
    height: "100%",
  },

  listItems: {
    width: "60%",
  },
  listItem: {
    color: "#fdeca5",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "About", listPath: "/About" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/projects" },
  {
    listIcon: <FontAwesomeIcon icon={faTools} />,
    listText: "Tools",
    listPath: "/tools",
  },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Divider />
      <List className={classes.listItems}>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={`${classes.listItem} ${classes.listText} `}
            onClick={() => setOpen(false)}
            component={NavLink}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuOpenIcon className={classes.menu} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
