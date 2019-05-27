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
import "./Videobackground.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary,
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

// style={{ height: "380px" }}
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
      <div className="video-container">
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper} style={{ height: "400px" }}>
                <FileUploader />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                id="outlined-mind-input"
                label="What's on your mind?"
                className={classes.textField}
                type="text"
                name="What's on your mind?"
                margin="normal"
                variant="outlined"
                fullWidth
              />

              <TextField
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
                fullWidth
              >
                {category.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Button
                variant="contained"
                id="btn-post"
                color="primary"
                className={classNames(classes.margin, classes.cssRoot)}
              >
                Post Now
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Videobackground.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videobackground);
