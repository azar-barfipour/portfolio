import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Link from "@material-ui/core/Link";
import { GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  socialContainer: {
    background: "transparent",
  },
  socialItem: {
    color: "#fdeca5",
  },
  link: {
    underline: "none",
    color: "#000",
    background: "#fdeca5",
    padding: ".3rem",
    fontSize: "1.1rem",
    display: "inline-block",
    marginTop: "5rem",
    marginBottom: "2rem",
    borderRadius: ".5rem",
  },
});

const Social = () => {
  const classes = useStyles();

  return (
    <>
      <Link
        href="./assets/Resume.pdf"
        target="_blank"
        underline="none"
        className={classes.link}
      >
        Resume
      </Link>
      <BottomNavigation className={classes.socialContainer}>
        <Link
          href="https://www.linkedin.com/in/azar-barfipour-406344189/"
          target="_blank"
          underline="none"
        >
          <BottomNavigationAction
            icon={<LinkedIn />}
            className={classes.socialItem}
          />
        </Link>
        <Link
          href="https://github.com/azar-barfipour"
          target="_blank"
          underline="none"
        >
          <BottomNavigationAction
            icon={<GitHub />}
            className={classes.socialItem}
          />
        </Link>
      </BottomNavigation>
    </>
  );
};
export default Social;
