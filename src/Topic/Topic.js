import React, { Component } from "react";
import { registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from "semantic-ui-react";
import FileUpload from "../FileUploader/fileUploader";

import "./Topic.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      uploads: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(e) {
  //     this.setState({ category: e.target.value });
  //   }

  //   handleSubmit(e) {
  //     e.preventDefault();
  //     alert(JSON.stringify(this.state, null, "  "));
  //   }

  //   onDrop = (acceptedFiles, rejectedFiles) => {
  //     const file = acceptedFiles.find(f => f);
  //     const data = new Image();

  //     data.onload = () => {
  //       let reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         console.log({
  //           src: file.preview,
  //           width: data.width,
  //           height: data.height,
  //           data: reader.result
  //         });
  //       };
  //     };

  //     data.src = file.preview;
  //   };

  render() {
    const { classes } = this.props;
    const category = [
      {
        checkedA: true
      },
      {
        checkedB: true
      },
      {
        checkedF: true
      },
      {
        checkedG: true
      }
    ];

    return (
      <div>
        <header className="new-article__header"> ADD NEW TIPS</header>
        <div className="new-article__container">
          <div className="article__attachment " onSubmit={this.handleSubmit}>
            <FileUpload
              onDrop={this.state.uploads}
              onChange={e => this.setState({ uploads: e.target.onDrop })}
            />
            <form className="form-container">
              <TextField
                id="outlined-mind-input"
                label="Tip Title"
                fullWidth
                type="text"
                name="What's on your mind?"
                margin="normal"
                variant="outlined"
              />
              <div className="">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  multiline
                  rowsMax="4"
                  // value={values.multiline}
                  // onChange={handleChange("multiline")}
                  fullWidth
                  margin="normal"
                  helperText="hello"
                  variant="outlined"
                />
              </div>
              <div className="post_button_container">
                <div className="checkbox-wrapper" col-sm-4>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={this.state.checkedA}
                        //   onChange={e => this.setState({ category: e.target.value })}
                        //   value={this.state.category}
                        />
                      }
                      label="Videos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={this.state.checkedA}
                        //   onChange={e => this.setState({ category: e.target.value })}
                        //   value={this.state.category}
                        />
                      }
                      label="Images"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={this.state.checkedA}
                        //   onChange={e => this.setState({ category: e.target.value })}
                        //   value={this.state.category}
                        />
                      }
                      label="Audio"
                    />
                    <br />
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={this.state.checkedA}
                        //   onChange={e => this.setState({ category: e.target.value })}
                        //   value={this.state.category}
                        />
                      }
                      label="Articles"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={this.state.checkedA}
                        //   onChange={e => this.setState({ category: e.target.value })}
                        //   value={this.state.category}
                        />
                      }
                      label="Tips"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                        //   checked={this.state.checkedA}
                        //   onChange={e => this.setState({ category: e.target.value })}
                        //   value={this.state.category}
                        />
                      }
                      label="Discussions"
                    />
                  </FormGroup>
                </div>

                <Button className="post_button" type="submit">
                  Post Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Topics;
