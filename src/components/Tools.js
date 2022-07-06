import { Box, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3,
  faNodeJs,
  faJs,
  faBitbucket,
  faGitAlt,
  faReact,
  faAngular,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import ThemeContext from "../store/theme-context";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  headingLight: {
    color: "#043689",
  },
  mainContainer: {
    background: "#233",
    height: "100vh",
    textAlign: "center",
    marginTop: "3rem",
  },
  mainContainerLight: {
    background: "#fff",
  },
  titleContainer: {
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    paddingTop: "3rem",
  },
  title: {
    color: "rgb(248 220 183)",
    marginRight: "1rem",
    marginBottom: "1rem",
    background: "rgb(18,32,27)",
    borderRadius: "1rem",
    width: "10rem",
    padding: "1rem",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    "@media (max-width:860px)": {
      width: "6rem",
      fontSize: ".7rem",
      display: "block",
    },
    "@media (max-width:600px)": {
      width: "3rem",
      fontSize: ".5rem",
      display: "block",
    },
  },
  titleLight: {
    background: "#dce4e7",
    color: "#000",
  },
  icon: {
    marginRight: "1rem",
    color: "tomato",
    fontSize: "2rem",
    "@media (max-width:860px)": {
      display: "none",
    },
  },
  iconLight: {
    color: "#043689",
  },
}));
const Tools = () => {
  const classes = useStyles();
  const Ctx = useContext(ThemeContext);
  const color = Ctx.theme;
  const light = color === "light";
  return (
    <Box
      component="div"
      className={`${classes.mainContainer} ${
        light && classes.mainContainerLight
      }`}
    >
      <Grid>
        <Typography
          variant="h4"
          align="center"
          className={`${classes.heading} ${light && classes.headingLight}`}
        >
          My Skills
        </Typography>
        <Box className={classes.titleContainer}>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faHtml5}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            HTML
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faCss3}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            CSS
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <Icon
              icon="simple-icons:materialui"
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Material UI
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faBootstrap}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Bootstrap
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faJs}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            JavaScript
          </Typography>

          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faReact}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            React
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <Icon
              icon="simple-icons:redux"
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Redux
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faAngular}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Angular
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faNodeJs}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Node.js
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <Icon
              icon="simple-icons:express"
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Express
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faDatabase}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            MongoDB
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faDatabase}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            SQL
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <Icon
              icon="simple-icons:firebase"
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Firebase
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faGitAlt}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Git
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            GitHub
          </Typography>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon
              icon={faBitbucket}
              className={`${classes.icon} ${light && classes.iconLight}`}
            />
            Bitbucket
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Tools;
