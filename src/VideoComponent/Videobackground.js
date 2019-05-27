import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
import classNames from "classnames";
import FileUploader from "../FileUploader/fileUploader";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 350
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
});

const category = [
  {
    value: "PAP",
    label: "P.A.P"
  },
  {
    value: "Konnect",
    label: "Konnect"
  },
  {
    value: "Web App",
    label: "Webapp"
  }
];

class Videobackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: ""
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={{ padding: "15px" }}>
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
            {/* <Paper className={classes.paper}> */}
            <TextField
              id="outlined-mind-input"
              label="What's on your mind?"
              className={classes.textField}
              type="text"
              name="What's on your mind?"
              margin="normal"
              variant="outlined"
            />
            {/* </Paper> */}
          </Grid>

          <Grid item xs={12} sm={8} />

          <Grid item xs={12} sm={4}>
            <TextField
              style={{ position: "relative", bottom: "300px" }}
              id="filled-select-category"
              select
              label="Select Category"
              className={classes.textField}
              value={this.state.category}
              onChange={this.handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your category"
              margin="normal"
              variant="outlined"
            >
              {category.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              color="primary"
              className={classNames(classes.margin, classes.cssRoot)}
              style={{
                height: "40px",
                minWidth: "70px",
                position: "relative",
                backgroundcolor: "linear-gradient(-90deg, rgb(255, 0, 34), purple)",
                float: "right",
                bottom: "270px"
              }}
            >
              Post Now
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Videobackground.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videobackground);
