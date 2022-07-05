import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import ThemeContext from "../store/theme-context";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "rgb(18,32,27)",
    margin: 0,
  },
  light: {
    background: "#fff",
  },
  menuLight: {
    color: "red",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menu: {
    color: "tomato",
    fontSize: "2.5rem",
  },
  menuSliderContainer: {
    width: "200px",
    background: "rgb(18,32,27)",
    height: "100%",
  },
  listItemsLight: {
    background: "#fff",
  },

  listItems: {
    width: "60%",
  },
  listItem: {
    color: "#fdeca5",
  },
  sun: {
    color: "#f89b18",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  moon: {
    color: "#f7e6a0",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  listItemText: {
    color: "tan",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "45px",
    maxWidth: "160px",
    position: "relative",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: 0,
    transition: "all .5s",
    "&:hover": {
      color: "tomato",
      fontSize: "18px",
      borderBottom: "1px solid tomato",
      padding: ".3rem",
    },
  },
  listItemTextLight: {
    color: "rgb(58 51 41)",
    "&:hover": {
      color: "rgb(59,129,246)",
      fontSize: "18px",
      borderBottom: "1px solid rgb(59,129,246)",
      padding: ".3rem",
    },
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
  const ctx = useContext(ThemeContext);
  const color = ctx.theme;
  const light = color === "light";
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const sideList = () => (
    <Box
      className={`${classes.menuSliderContainer} ${
        light && classes.listItemsLight
      }`}
      component="div"
    >
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
            {/* <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon> */}
            <ListItemText
              primary={item.listText}
              className={`${classes.listItemText} ${
                light && classes.listItemTextLight
              } `}
            />
            {/* <a className={classes.btn1}>{item.listText}</a> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar
          position="fixed"
          className={`${classes.appBar} ${light && classes.light}`}
        >
          <Toolbar className={classes.toolBar}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuOpenIcon
                className={`${classes.menu} ${light && classes.menuLight}`}
              />
            </IconButton>
            {light ? (
              <FontAwesomeIcon
                className={classes.sun}
                icon={faSun}
                onClick={() => {
                  ctx.themeHandler();
                }}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                className={classes.moon}
                icon={faMoon}
                onClick={() => {
                  ctx.themeHandler();
                }}
              ></FontAwesomeIcon>
            )}
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
