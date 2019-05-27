import React, { Component } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
<<<<<<< HEAD
import classNames from "classnames";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from "semantic-ui-react";

import "./mainContent.css";
// import "./styles.scss";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
=======
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
>>>>>>> 0ced6aba63561f35d5979dc42d39449b79cebcee

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

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange = editorState => {
    const MAX_LENGTH = 10;
    const length = editorState.getCurrentContent().getPlainText("").length;

    if (length <= MAX_LENGTH) {
      this.setState({ editorState });
    }
  };

  render() {
    const { editorState } = this.state;
    const { classes } = this.props;
    return (
<<<<<<< HEAD
      <div className="new-article__container">
        <div className="article__attachment ">
          <div className="new-article__attachment ">
            <FilePond
              onClick={true}
              className="file__article"
              dropOnElement="true"
              dropOnPage="true"
              dropValidation="true"
              setOptions="option"
              instantUpload="true"
              allowImageResize={true}
              imageResizeUpscale={true}
              allowImageTransform="true"
              allowMultiple={false}
              allowReplace={true}
              server=""
              name={"file"}
              labelIdle='DRAG & DROP FILES HERE<br><span class="filepond--label-action"> Browse </span>'
              ref={ref => (this.pond = ref)}
            />
          </div>
          <form className="form-container">
            <TextField
              id="outlined-full-width"
              label="Article Title"
              fullWidth
              margin="normal"
              variant="outlined"
              className="textfield"
            />
            <div className="form-editor-container">
              <TextField
                id="outlined-full-width"
                label="Article Title"
                fullWidth
                margin="normal"
                variant="outlined"
                select
                label="Select Category"
=======
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
>>>>>>> 0ced6aba63561f35d5979dc42d39449b79cebcee
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
<<<<<<< HEAD
=======
                fullWidth
>>>>>>> 0ced6aba63561f35d5979dc42d39449b79cebcee
              >
                {category.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
<<<<<<< HEAD
            </div>
            {/* <p> Description has to be atleast 50 characters</p> */}
            <div className="post_button_container">
              <Button className="post_button">Post Now</Button>
            </div>
          </form>
=======

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
>>>>>>> 0ced6aba63561f35d5979dc42d39449b79cebcee
        </div>
      </div>
    );
  }
}

export default Articles;
