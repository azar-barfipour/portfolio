import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Link from "@material-ui/core/Link";
import { GitHub, LinkedIn } from "@material-ui/icons";
import ThemeContext from "../store/theme-context";

const useStyles = makeStyles({
  socialContainer: {
    background: "transparent",
  },
  socialItem: {
    color: "#fdeca5",
    marginTop: "rem",
    display: "inline-block",
  },
  link: {
    color: "#000",
    background: "#fdeca5",
    padding: ".3rem",
    fontSize: "1.1rem",
    width: "6rem",
    display: "inline-block",
    borderRadius: ".5rem",
    marginTop: "2rem",
  },
  light: {
    color: "rgb(59,129,246)",
  },
  resumeLight: {
    background: "rgb(59,129,246)",
    color: "#fff",
  },
});

const Social = () => {
  const classes = useStyles();
  const Ctx = useContext(ThemeContext);
  const color = Ctx.theme;
  const light = color === "light";

  return (
    <>
      <Link
        href="./assets/Resume.pdf"
        target="_blank"
        underline="none"
        className={`${classes.link} ${light && classes.resumeLight}`}
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
            className={`${classes.socialItem} ${light && classes.light}`}
          />
        </Link>
        <Link
          href="https://github.com/azar-barfipour"
          target="_blank"
          underline="none"
        >
          <BottomNavigationAction
            icon={<GitHub />}
            className={`${classes.socialItem} ${light && classes.light}`}
          />
        </Link>
      </BottomNavigation>
    </>
  );
};
export default Social;
