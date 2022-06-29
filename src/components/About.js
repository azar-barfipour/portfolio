import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Person from "@material-ui/icons/Person";
import Work from "@material-ui/icons/Work";
import School from "@material-ui/icons/School";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "rgb(248 220 183)",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Box>
        <Typography variant="h4" align="center" className={classes.heading}>
          My Journey
        </Typography>
      </Box>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <Person />
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            About me
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I'm a self-taught web developer with experience in designing new
            features from ideation to production. I take into consideration the
            user experience while writing reusable and efficient code. I
            passionately combine good design, technology, and innovation in all
            my projects, which I like to accompany from the first idea to
            release. I enjoy working individually and in a group, learning new
            technologies everyday.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <Work />
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Frontend Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            May 2022- Current
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Currently, I started working as a volunteer frontend developer in
            FreeLiveNet company in Vancouver. I work remotely on an CRM
            application using Angular. It is a great opportunity to work and
            learn at the same time, and collaborate using GitHub and Bitbucket.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <Work />
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Analyst and Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            2015-2020
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I worked for 4+ years in Behban, a big software company in my
            country, Iran. It was a great opportunity to collaborate with more
            than 40 teammates and handle more than 100 clients. My main task was
            to communicate with clients, debug, test, and develope web based
            applications using HTML, CSS, JavaScript, and SQL Server.
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <School />
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Bachelor Degree
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            2010-2015
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I completed my undergraduate in Software Engineering. I learned
            basic concept of software and programming there.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <School />
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Diploma
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            2021-2022
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I joined Cornerstone International College to study Web Development.
            I gained many valuable and updated knowledge of web development such
            as SASS, React, Node.js, Ecma6, using Figma, Trello and GitHub.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
