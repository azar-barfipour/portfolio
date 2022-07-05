import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./Social";
import Lottie from "react-lottie";
import animationData from "../images/animationData.json";
import animationLightData from "../images/animationLightData.json";
import ThemeContext from "../store/theme-context";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "tomato",
    marginTop: "20rem",
  },
  subtitle: {
    color: "rgb(248 220 183)",
    textTransform: "uppercase",
  },
  typedContainer: {
    height: "100vh",
    background: "#233",
    width: "100vw",
    textAlign: "center",
  },
  lottie: {
    marginTop: "12rem",
    display: "inline-block",
    "@media(max-width: 800px)": {
      display: "none",
    },
  },
  light: {
    background: "#fff",
    color: "#000",
  },
  titleLight: {
    color: "rgb(59,129,246)",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    "@media(max-width: 800px)": {
      display: "inline-block",
    },
  },
}));

const Header = () => {
  const Ctx = useContext(ThemeContext);
  const color = Ctx.theme;
  const light = color === "light";
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsLight = {
    loop: true,
    autoplay: true,
    animationData: animationLightData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const classes = useStyles();
  return (
    <Box className={`${classes.typedContainer} ${light && classes.light}`}>
      <Box className={classes.wrapper}>
        <Box>
          <Typography
            className={`${classes.title} ${light && classes.titleLight}`}
            variant="h4"
          >
            <Typed strings={["Azar Barfipour"]} typeSpeed={40} />
          </Typography>
          <Typography
            className={`${classes.subtitle} ${light && classes.light}`}
            variant="h5"
          >
            <Typed
              strings={["Frontend Developer", "React Developer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </Typography>
          <Social />
        </Box>
        <Box className={classes.lottie}>
          {!light && (
            <Lottie options={defaultOptions} height={400} width={400} />
          )}
          {light && (
            <Lottie options={defaultOptionsLight} height={400} width={400} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
