import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import green from "@material-ui/core/colors/green";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
import classNames from "classnames";
import FileUploader from "../FileUploader/fileUploader";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import "./newTip.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: green[600],
    "&$checked": {
      color: green[500]
    },
    checked: {}
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    "@media (max-width: 499px)": {
      height: "auto"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      "@media (max-width: 499px)": {
        height: "50px"
      }
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  typography: {
    fontSize: "3rem",
    "@media (min-width: 499px)": {
      fontSize: "4.5rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "6rem"
    }
  },
  card: {
    minWidth: 275,
    height: "auto",
    "@media (max-width: 499px)": {
      height: "auto"
    }
  },

  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
});

// const [values, setValues] = React.useState({
//   multiline: "Controlled",
//   currency: "EUR"
// });

class Tips extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="tip-container">
        <div className={classes.root} style={{ padding: "15px" }}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={"heading"} variant={"h5"} gutterBottom>
                ADD NEW TIPS
              </Typography>

              <Grid container spacing={24}>
                <Grid item xs={12} sm={8}>
                  <Paper className={classes.paper} style={{ height: "400px" }}>
                    <FileUploader />
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    id="outlined-mind-input"
                    label="Tip Title"
                    fullWidth
                    type="text"
                    name="What's on your mind?"
                    margin="normal"
                    variant="outlined"
                  />
                  <br />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax="4"
                    // value={values.multiline}
                    // onChange={handleChange("multiline")}
                    fullWidth
                    margin="normal"
                    helperText="hello"
                    variant="outlined"
                  />

                  <div className="checkbox-wrapper" col-sm-4>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange("checkedA")}
                            value="checkedA"
                          />
                        }
                        label="Secondary"
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.checkedB}
                            onChange={this.handleChange("checkedB")}
                            value="checkedB"
                            color="primary"
                          />
                        }
                        label="Primary"
                      />

                      <FormControlLabel
                        control={<Checkbox value="checkedC" />}
                        label="Uncontrolled"
                      />

                      <br />

                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.checkedG}
                            onChange={this.handleChange("checkedG")}
                            value="checkedG"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Custom color"
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            value="checkedH"
                          />
                        }
                        label="Custom icon"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            value="checkedI"
                          />
                        }
                        label="Custom size"
                      />
                    </FormGroup>
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    id="btn-create"
                    className={classNames(classes.margin, classes.cssRoot)}
                  >
                    CREATE
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

Tips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tips);
