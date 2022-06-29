import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./Social";
import ThemeContext from "../store/theme-context";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "rgb(248 220 183)",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <button
        type="button"
        onClick={() => {
          theme.setTheme();
          // setTheme((curr) => (curr === "light" ? "dark" : "light"));
        }}
      ></button>
      <Grid container justify="center"></Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Azar Barfipour"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Frontend Developer", "Backend Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Social />
    </Box>
  );
};

export default Header;
