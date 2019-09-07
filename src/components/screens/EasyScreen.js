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
    const { classes } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Easy Level</h2>
      </div>
    );
  }
}

export default withStyles(styles)(LevelScreen);
