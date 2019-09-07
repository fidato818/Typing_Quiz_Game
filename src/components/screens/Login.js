import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import axios from "axios";

import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  paper: {
    // marginTop: theme.spacing(13),
    // marginBottom: theme.spacing(4),
    // marginLeft: theme.spacing(20),
    // marginRight: theme.spacing(20),
    // margin: theme.spacing(10),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(13),
      // marginBottom: theme.spacing(6),
      // padding: theme.spacing(3)
    }
  },
  // root: {
  //   backgroundColor: theme.palette.background.paper,
  //   width: 500
  // },
  // paper: {
  //   // marginTop: theme.spacing(13),
  //   // marginBottom: theme.spacing(4),
  //   margin: theme.spacing(25),
  //   padding: theme.spacing(2),
  //   [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
  //     marginTop: theme.spacing(13),
  //     marginBottom: theme.spacing(6),
  //     padding: theme.spacing(3)
  //   }
  // },
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }

  // root: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.paper
  // }
});
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  /*************************************************/
  onChange = e => {
    this.setState({ username: e.target.value });
  };
  /*************************************************/
  onSubmit = e => {
    e.preventDefault();
    // alert('sxe')
    // this.props.history.push("/LevelScreen");
    const user = {
      username: this.state.username
    };
    console.log(user);
    axios
      .post("http://localhost:3001/users/add", user)
      .then(res => console.log(res.json()))
      .then(res => {
        console.log(res);
      })
      // .then(res => {
      //   this.setState({
      //     username: ""
      //   });
      //   // this.props.history.push("/LevelScreen");
      // })
      .catch(e => {
        console.log(`Error in CreateBook!, ${e}`);
      });
  };
  render() {
    const { classes, callback, history } = this.props;
    const { username } = this.state;
    // console.log(username);

    /********************* ****************************/

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <br />
            <br />
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form onSubmit={this.onSubmit} className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    // id="email"
                    // name="username"
                    label="User Name"
                    value={username}
                    onChange={this.onChange}
                    fullWidth
                    autoComplete=""
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                LOGIN
              </Button>

              <Grid container justify="center">
                <Grid item>
                  <div href="#" variant="body2">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        history.push("/HighScoreScreen");
                      }}
                    >
                      HighScore
                    </span>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

Login.protoTypes = {
  callback: PropTypes.func
};
export default withStyles(styles)(Login);
