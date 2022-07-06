import React, { useState, useRef, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import emailjs from "emailjs-com";

import Send from "@material-ui/icons/Send";
import { Link } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../store/theme-context";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  light: {
    background: "#fff",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  headingLight: {
    color: "rgb(59,129,246)",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  inputLight: {
    color: "#000",
  },
  button: {
    color: "tomato",
    marginTop: "1rem",
    border: "1px solid tan",
    fontFamily: "",
    fontSize: "0.875rem",
    background: "inherit",
    cursor: "pointer",
    fontWeight: "500",
    lineHeight: "1.75",
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    padding: "6px 16px",
    width: "100%",
    display: "inherit",
    alignItems: "inherit",
    justifyContent: "inherit",
  },
  buttonLight: {
    color: "rgb(59,129,246)",
    border: "1px solid #000",
  },
  span: {
    marginLeft: "6px",
  },
  field: {
    margin: "1rem 0rem",
  },
  link: {
    color: "tomato",
    fontSize: "1.3rem",
    display: "inline-block",
    marginTop: "1rem",
  },
  linkLight: {
    color: "rgb(59,129,246)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #000",
    margin: "1rem auto",
  },
  modalLight: {
    border: "2px solid #fff",
  },
  paper: {
    backgroundColor: "rgb(18,32,27)",
    border: "2px solid tan",
    borderRadius: "1rem",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paperLight: {
    backgroundColor: "#fff",
    border: "2px solid #000",
  },
  paperTitle: {
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    color: "tomato",
  },
  paperTitleLight: {
    color: "rgb(59,129,246)",
  },
  paperText: {
    fontWeight: "400",
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    color: "tomato",
  },
  paperTextLight: {
    color: "rgb(59,129,246)",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const InputFieldLight = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgb(59,129,246)",
    },
    "& label": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000",
      },
      "&:hover fieldset": {
        borderColor: "#000",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#000",
      },
    },
  },
})(TextField);
const Contact = () => {
  const Ctx = useContext(ThemeContext);
  const color = Ctx.theme;
  const light = color === "light";
  const classes = useStyles();
  const [result, setResult] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const form = useRef();
  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsModal(true);
          setResult(true);
        },
        (error) => {
          setIsModal(true);
          setResult(false);
        }
      );
  };

  const closeHandler = () => {
    setIsModal(false);
  };

  return (
    <Box
      component="div"
      className={`${classes.contactContainer} ${light && classes.light}`}
    >
      {result ? (
        <Modal
          open={isModal}
          className={`${classes.modal} ${light && classes.modalLight}`}
          BackdropComponent={Backdrop}
          onClose={closeHandler}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Fade in={isModal}>
            <div className={`${classes.paper} ${light && classes.paperLight}`}>
              <h2
                className={`${classes.paperTitle} ${
                  light && classes.paperTitleLight
                }`}
              >
                Success
              </h2>
              <p
                className={`${classes.paperText} ${
                  light && classes.paperTextLight
                }`}
              >
                Thank you for contacting.
              </p>
            </div>
          </Fade>
        </Modal>
      ) : (
        <Modal
          open={isModal}
          className={classes.modal}
          onClick={closeHandler}
          closeAfterTransition
          BackdropProps={{
            timeout: 50,
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Fade in={isModal}>
            <div className={classes.paper}>
              <h2 className={classes.paperTitle}>Error</h2>
              <p className={classes.paperText}>
                Something Went Wrong. Please try again!
              </p>
            </div>
          </Fade>
        </Modal>
      )}
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <form ref={form} onSubmit={sendEmailHandler}>
            <Typography
              variant="h5"
              className={`${classes.heading} ${light && classes.headingLight}`}
            >
              Hire or Contact me...
            </Typography>
            {!light ? (
              <InputField
                name="from_name"
                required
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{
                  className: classes.input,
                }}
              />
            ) : (
              <InputFieldLight
                name="from_name"
                required
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{
                  className: classes.inputLight,
                }}
              />
            )}
            {!light && (
              <InputField
                name="from_email"
                required
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{
                  className: classes.input,
                }}
                className={classes.field}
              />
            )}
            {light && (
              <InputFieldLight
                name="from_email"
                required
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{
                  className: classes.inputLight,
                }}
                className={classes.field}
              />
            )}
            {!light && (
              <InputField
                name="message"
                required
                fullWidth={true}
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                inputProps={{
                  className: classes.input,
                }}
              />
            )}
            {light && (
              <InputFieldLight
                name="message"
                required
                fullWidth={true}
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                inputProps={{
                  className: light && classes.inputLight,
                }}
              />
            )}
            <button
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={`${classes.button} ${light && classes.buttonLight}`}
            >
              Contact Me
              <span className={classes.span}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </button>
          </form>
          <Link
            href="mailto:azar.barfipour@gmail.com"
            underline="none"
            className={`${classes.link} ${light && classes.linkLight}`}
          >
            Email me directly
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
