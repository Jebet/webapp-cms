import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";

import "./mainContent.css";
import Videobackground from "../VideoComponent/Videobackground";

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: green[600],
    "&$checked": {
      color: green[500]
    },
    checked: {}
  },
  card: {
    minWidth: 275,
    height: "auto",
    paddingBottom: "50px",
    "@media (max-width: 499px)": {
      height: "auto",
      // padding: "10px"
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
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function mainContent(props) {
  const { classes } = props;

  return (
    <div className="tip-container">
      <Card className={classes.card}>
        <CardContent style={{position: 'relative', bottom: '20px'}}>
          <Typography className={"heading"} variant={"h5"} gutterBottom style={{  position: 'relative',
    top: '30px',}}>
            ADD NEW VIDEO:
          </Typography>
          <Videobackground />
        </CardContent>
      </Card>
    </div>
  );
}

mainContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(mainContent);
