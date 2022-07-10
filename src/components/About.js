import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Person from "@material-ui/icons/Person";
import Work from "@material-ui/icons/Work";
import School from "@material-ui/icons/School";
import ThemeContext from "../store/theme-context";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    marginTop: "3rem",
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
  timeLineLight: {
    "&:before": {
      border: "1px solid #453e34",
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
  body1Light: {
    color: "rgb(59,129,246)",
  },
  subtitle1: {
    color: "rgb(248 220 183)",
  },
  light: {
    background: "#fff",
    color: "rgb(59,129,246)",
  },
  timeLineYearLight: {
    background: "rgb(59,129,246)",
  },
  subHeadingLight: {
    color: "rgb(58 51 41)",
  },
  subtitle1Light: {
    color: "rgb(92 91 89)",
  },
  timeLineItemLight: {
    "&:before": {
      borderColor: "rgb(59,129,246) rgb(59,129,246)  transparent transparent",
    },
    "&:after": {
      border: "1px solid rgb(59,129,246)",
    },
    [theme.breakpoints.up("md")]: {
      "&:nth-of-type(2n)": {
        borderColor: "rgb(59,129,246)",
      },
      "&:nth-of-type(2n):before": {
        borderColor: "transparent transparent rgb(59,129,246) rgb(59,129,246)",
      },
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const Ctx = useContext(ThemeContext);
  const color = Ctx.theme;
  const light = color === "light";
  return (
    <Box
      component="header"
      className={`${classes.mainContainer} ${light && classes.light}`}
    >
      <Box>
        <Typography
          variant="h4"
          align="center"
          className={`${classes.heading} ${light && classes.light}`}
        >
          My Journey
        </Typography>
      </Box>
      <Box
        component="div"
        className={`${classes.timeLine} ${light && classes.timeLineLight}`}
      >
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${
            light && classes.timeLineYearLight
          } ${classes.timeLineItem}`}
        >
          <Person />
        </Typography>
        <Box
          component="div"
          className={`${classes.timeLineItem} ${
            light && classes.timeLineItemLight
          }`}
        >
          <Typography
            variant="h5"
            align="center"
            className={`${classes.subHeading}
            ${light && classes.subHeadingLight}`}
          >
            About me
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={`${classes.subtitle1}
            ${light && classes.subtitle1Light}`}
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
          className={`${classes.timeLineYear} ${
            light && classes.timeLineYearLight
          } ${classes.timeLineItem}`}
        >
          <Work />
        </Typography>
        <Box
          component="div"
          className={`${classes.timeLineItem} ${
            light && classes.timeLineItemLight
          }`}
        >
          <Typography
            variant="h5"
            align="center"
            className={`${classes.subHeading}
            ${light && classes.subHeadingLight}`}
          >
            Frontend Developer
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={`${classes.body1}
            ${light && classes.body1Light}`}
          >
            May 2022- Current
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={`${classes.subtitle1}
            ${light && classes.subtitle1Light}`}
          >
            Currently, I started working as a frontend developer in FreeLiveNet
            company in Vancouver. I work remotely on an Rest API application
            using Angular. It is a great opportunity to work and improve myself,
            and collaborate using GitHub and Bitbucket. I'm working on testing,
            debugging, developing and enhancing UI/UX and functions. Also, I'm
            working on creating embed code of the application using JavaScript.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${
            light && classes.timeLineYearLight
          } ${classes.timeLineItem}`}
        >
          <Work />
        </Typography>
        <Box
          component="div"
          className={`${classes.timeLineItem} ${
            light && classes.timeLineItemLight
          }`}
        >
          <Typography
            variant="h5"
            align="center"
            className={`${classes.subHeading}
            ${light && classes.subHeadingLight}`}
          >
            Software Analyst and Developer
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={`${classes.body1}
            ${light && classes.body1Light}`}
          >
            2015-2020
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={`${classes.subtitle1}
            ${light && classes.subtitle1Light}`}
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
          className={`${classes.timeLineYear} ${
            light && classes.timeLineYearLight
          } ${classes.timeLineItem}`}
        >
          <School />
        </Typography>
        <Box
          component="div"
          className={`${classes.timeLineItem} ${
            light && classes.timeLineItemLight
          }`}
        >
          <Typography
            variant="h5"
            align="center"
            className={`${classes.subHeading}
            ${light && classes.subHeadingLight}`}
          >
            Diploma
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={`${classes.body1}
            ${light && classes.body1Light}`}
          >
            2021-2022
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={`${classes.subtitle1}
            ${light && classes.subtitle1Light}`}
          >
            I joined Cornerstone International College to study Web Development.
            I gained many valuable and updated knowledge of web development such
            as SASS, React, Node.js, Ecma6, etc. I had great opportunities
            working in groups and having scrum meetings, creating applications
            by using Figma, Trello and GitHub.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${
            light && classes.timeLineYearLight
          } ${classes.timeLineItem}`}
        >
          <School />
        </Typography>
        <Box
          component="div"
          className={`${classes.timeLineItem} ${
            light && classes.timeLineItemLight
          }`}
        >
          <Typography
            variant="h5"
            align="center"
            className={`${classes.subHeading}
            ${light && classes.subHeadingLight}`}
          >
            Bachelor Degree
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={`${classes.body1}
            ${light && classes.body1Light}`}
          >
            2010-2015
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={`${classes.subtitle1}
            ${light && classes.subtitle1Light}`}
          >
            I completed my undergraduate in Software Engineering. I learned
            basic concept of software and programming there.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
