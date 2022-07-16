import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";
import meetup from "../images/meetup.png";
import job from "../images/searchJob.png";
import eCommerce from "../images/e-commerce.png";
import location from "../images/location.png";
import portfolio from "../images/portfolio.png";
import { GitHub } from "@material-ui/icons";
import { Icon } from "@iconify/react";
import ThemeContext from "../store/theme-context";

const useStyles = makeStyles(() => ({
  mainContainer: {
    background: "#233",
    marginTop: "3rem",
  },
  mainContainerLight: {
    background: "#fff",
  },
  cardContainer: {
    padding: "2rem",
    width: "60%",
    margin: "3rem auto",
    background: "rgb(18,32,27)",
  },
  cardName: {
    color: "tomato",
  },
  cardNameLight: {
    color: "#043689",
  },
  cardMedia: {
    background: "rgb(18,32,27)",
    width: "100%",
    padding: "2rem auto",
    border: "1px solid tan",
    borderRadius: ".5rem",
  },
  cardContent: {
    color: "rgb(248 220 183)",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "1rem",
  },
  cardContentLight: {
    color: "#3a3329",
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardIconLink: {
    display: "flex",
    alignItems: "center",
    marginRight: "1rem",
  },
  cardLink: {
    marginRight: "1rem",
  },
  cardIcon: {
    color: "tomato",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    marginRight: "1rem",
  },
  cardIconLight: {
    color: "#043689",
  },
  cardContainerLight: {
    background: "#dce4e7",
  },
  cardLight: {
    border: "1px solid #3a3329",
  },
  link: {
    color: "tomato",
  },
  linkLight: {
    color: "#043689",
  },
}));

const projects = [
  {
    name: "Meetup",
    description: `A React app for finding events to join and having fun. Users can search for their favorite events and book them. Booked events would add to each user calendar. Also, if the user decide not attend the event, they can easily delete the event from the calendar. Moreover, users can add their event, so others can see or choose it. I used Firebase Authentication and Context to get provide state in any pages of the App `,
    technical: [
      <FontAwesomeIcon icon={faHtml5} />,
      <FontAwesomeIcon icon={faCss3} />,
      <FontAwesomeIcon icon={faReact} />,
      <Icon icon="simple-icons:firebase" />,
    ],
    image: meetup,
    share: "https://github.com/azar-barfipour/React/tree/master/meetup",
    demo: "https://recat-meetup-project.web.app/Home",
  },
  //FIXME: add doctor appointment here
  // {
  //   name: "Doctor Appointment",
  //   description: `Contributed on a React app for getting doctor appointments. Users and doctors both can create an account and login. Users can check list of doctors and choose the best one then get an appointment. It was a great experience working in a team, using Figma for the design part and having scrum meetings and dividing tasks in the Trello everyday.`,
  //   technical: [
  //     <FontAwesomeIcon icon={faHtml5} />,
  //     <FontAwesomeIcon icon={faCss3} />,
  //     <FontAwesomeIcon icon={faReact} />,
  //     <Icon icon="simple-icons:firebase" />,
  //   ],
  //   image: doctor,
  //   share: "https://github.com/kubilaycakmak/doctor-appointment",
  //   // demo: "https://recat-meetup-project.web.app/Home",
  // },
  {
    name: "Job Search",
    description: `Contributed on a MERB stack React app for finding jobs using MongoDB and Nodejs. Users can search for jobs with the job or city keyword. Also they can add add jobs with specific skills.`,
    technical: [
      <FontAwesomeIcon icon={faHtml5} />,
      <FontAwesomeIcon icon={faCss3} />,
      <Icon icon="simple-icons:materialui" />,
      <FontAwesomeIcon icon={faReact} />,
      <FontAwesomeIcon icon={faDatabase} />,
      <Icon icon="simple-icons:nodejs" />,
      <Icon icon="simple-icons:express" />,
    ],
    image: job,
    share: "https://github.com/sounit-organization/OLD-job_search_app_front",
    demo: "https://job-search-app-46823.web.app/",
  },
  {
    name: "E-commerce",
    description: `An e-commerce React app, using Redux toolkit and Firebase Google Authentication. Users after login can see handicraft products and they can add them to the card. Moreover, by using Redux on card, users can increase or decrease existing items.`,
    technical: [
      <FontAwesomeIcon icon={faHtml5} />,
      <FontAwesomeIcon icon={faCss3} />,
      <FontAwesomeIcon icon={faReact} />,
      <Icon icon="simple-icons:firebase" />,
      <Icon icon="simple-icons:redux" />,
    ],
    image: eCommerce,
    share: "https://github.com/azar-barfipour/react-redux-proj-udemy",
    demo: "https://react-redux-e-commerce-app.vercel.app/",
  },
  {
    name: "Weather-Map",
    description: `A React app using Google map and Open Weather API for checking weather by location. Users can see the weather by allowing access to their location. Moreover, users can check any place on the map by markers. This app it's my own idea, to see the temperature just by finding the location on the map. Using icons helps to find weather information easier.`,
    technical: [
      <FontAwesomeIcon icon={faHtml5} />,
      <FontAwesomeIcon icon={faCss3} />,
      <FontAwesomeIcon icon={faReact} />,
    ],
    image: location,
    share: "https://github.com/azar-barfipour/weather-api-app",
    demo: "https://weather-app-azar-barfipour.vercel.app/home",
  },
  {
    name: "Portfolio",
    description: `This Portfolio website using React and Martial UI. It is possible to change the theme by choosing dark or light mode.`,
    technical: [
      <FontAwesomeIcon icon={faHtml5} />,
      <FontAwesomeIcon icon={faCss3} />,
      <FontAwesomeIcon icon={faReact} />,
      <Icon icon="simple-icons:materialui" />,
    ],
    image: portfolio,
    share: "https://github.com/azar-barfipour/portfolio",
    demo: "https://material-ui-portfolio.vercel.app/",
  },
];

const Projects = () => {
  const Ctx = useContext(ThemeContext);
  const color = Ctx.theme;
  const light = color === "light";
  const classes = useStyles();
  return (
    <Box
      component="div"
      className={`${classes.mainContainer} ${
        light && classes.mainContainerLight
      }`}
    >
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item md={12} key={i}>
            <Card
              className={`${classes.cardContainer} ${
                light && classes.cardContainerLight
              }`}
            >
              <Box>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={`${classes.cardName} ${
                    light && classes.cardNameLight
                  }`}
                >
                  {project.name}
                </Typography>
                <Box>
                  <img
                    alt="project"
                    src={project.image}
                    className={`${classes.cardMedia} ${
                      light && classes.cardLight
                    }`}
                  ></img>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    className={`${classes.cardContent} ${
                      light && classes.cardContentLight
                    }`}
                  >
                    {project.description}
                  </Typography>
                  <Box className={classes.cardFooter}></Box>
                </Box>
              </Box>
              <CardActions className={classes.cardAction}>
                <Box className={classes.cardIconLink}>
                  <Link
                    href={project.share}
                    target="_blank"
                    underline="none"
                    className={classes.cardLink}
                  >
                    <GitHub
                      className={`${classes.link} ${
                        light && classes.linkLight
                      }`}
                    />
                  </Link>
                  <Link href={project.demo} target="_blank" underline="none">
                    <FontAwesomeIcon
                      icon={faLink}
                      className={`${classes.link} ${
                        light && classes.linkLight
                      }`}
                    />
                  </Link>
                </Box>
                <Box
                  className={`${classes.cardIcon} ${
                    light && classes.cardIconLight
                  }`}
                >
                  {project.technical &&
                    project.technical.map((tech) => (
                      <Typography
                        variant="body2"
                        className={`${classes.cardIcon} ${
                          light && classes.cardIconLight
                        }`}
                      >
                        {tech}
                      </Typography>
                    ))}
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
