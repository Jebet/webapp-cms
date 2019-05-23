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
import "../Topic/newTip.css";

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
    color: theme.palette.text.secondary
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
    // marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  card: {
    minWidth: 275,
    height: 610
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
});

class Videobackground extends React.Component {
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
      <div className={classes.root} style={{ padding: "15px" }}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper} style={{ height: "350px" }}>
                  <FileUploader style={{ position: "relative", top: "50px" }} />
                  {/* <div
              class="fas fa-cloud-upload-alt"
              style={{ width: "60px", height: "60px", color: "red" }}
            /> */}
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>Tip Name</Paper>
              </Grid>

              <Grid item xs={12} sm={8} />

              <Grid item xs={12} sm={4}>
                <Paper
                  className={classes.paper}
                  style={{
                    position: "relative",
                    bottom: "300px",
                    height: "130px"
                  }}
                >
                  Description
                </Paper>

                <Button
                  variant="contained"
                  color="primary"
                  className={classNames(classes.margin, classes.cssRoot)}
                  style={{
                    height: "40px",
                    minWidth: "70px",
                    position: "relative",
                    backgroundcolor: "purple",
                    float: "right",
                    bottom: "20px"
                  }}
                >
                  CREATE
                </Button>

                {/* <Grid item xs={12} sm={4} > */}
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
                {/* </Grid> */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Videobackground.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videobackground);
