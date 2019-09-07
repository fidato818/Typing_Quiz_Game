import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { textAlign } from "@material-ui/system";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class LevelScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { classes, history } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          onClick={() => {
            history.push("/EasyScreen");
          }}
          className={classes.button}
        >
          Easy Level
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/MediumScreen");
          }}
          className={classes.button}
        >
          Medium Level
        </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/HardScreen");
          }}
          className={classes.button}
        >
          Hard Level
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(LevelScreen);
