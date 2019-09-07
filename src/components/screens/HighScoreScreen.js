import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    width: "70%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 100
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

class HighScoreScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { classes, callback, history } = this.props;
    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
      id += 1;
      return { id, name, calories, fat, carbs, protein };
    }

    const rows = [
      createData("Adnan Ahmed", 159),
      createData("Hasnain Zaidi", 237),
      createData("Shayan Ahmed", 262),
      createData("Zeeshan ", 305),
      createData("Aijaz", 356)
    ];
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Player Name</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

HighScoreScreen.protoTypes = {
  callback: PropTypes.func
};
export default withStyles(styles)(HighScoreScreen);
