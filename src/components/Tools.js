import { Box, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React from "react";
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

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "tomato",
    padding: "3rem 0",
  },
  mainContainer: {
    background: "#233",
    height: "100vh",
    textAlign: "center",
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
    marginRight: "2rem",
    marginBottom: "2rem",
    background: "rgb(18,32,27)",
    borderRadius: "1rem",
    width: "10rem",
    padding: "1rem",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "1rem",
    color: "tomato",
    fontSize: "2rem",
  },
}));
const Tools = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Grid className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          My Skills
        </Typography>
        <Box className={classes.titleContainer}>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faHtml5} className={classes.icon} />
            HTML
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faCss3} className={classes.icon} />
            CSS
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <Icon icon="simple-icons:materialui" className={classes.icon} />
            Material UI
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faBootstrap} className={classes.icon} />
            Bootstrap
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faJs} className={classes.icon} />
            JavaScript
          </Typography>

          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faReact} className={classes.icon} />
            React
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <Icon icon="simple-icons:redux" className={classes.icon} />
            Redux
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faAngular} className={classes.icon} />
            Angular
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faNodeJs} className={classes.icon} />
            Node.js
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <Icon icon="simple-icons:express" className={classes.icon} />
            Express
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faDatabase} className={classes.icon} />
            MongoDB
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faDatabase} className={classes.icon} />
            SQL
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <Icon icon="simple-icons:firebase" className={classes.icon} />
            Firebase
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faGitAlt} className={classes.icon} />
            Git
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faGithub} className={classes.icon} />
            GitHub
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
          >
            <FontAwesomeIcon icon={faBitbucket} className={classes.icon} />
            Bitbucket
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Tools;
