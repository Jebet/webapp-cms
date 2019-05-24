import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../VideoComponent/mainContent.css";
import Videobackground from "../VideoComponent/Videobackground";

const styles = {
  card: {
    minWidth: 255,
    height: 505,
    padding: "5px"
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function mainContent(props) {
  const { classes } = props;

  return (
    <div className="main-container">
      <Card className={classes.card} style={{}}>
        <CardContent>
          <Typography className={"heading"} variant={"h5"} gutterBottom>
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
