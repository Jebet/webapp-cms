import React, { Component } from "react";
import { registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from "semantic-ui-react";
import FileUpload from "../FileUploader/fileUploader";

import "./Videobackground.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      category: "",
      uploads: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ category: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state, null, "  "));
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    const file = acceptedFiles.find(f => f);
    const data = new Image();

    data.onload = () => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log({
          src: file.preview,
          width: data.width,
          height: data.height,
          data: reader.result
        });
      };
    };

    data.src = file.preview;
  };

  render() {
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

    return (
      <div>
        <header className="new-article__header">ADD NEW VIDEOS</header>
        <div className="new-article__container">
          <div className="article__attachment " onSubmit={this.handleSubmit}>
            <FileUpload
              onDrop={this.state.uploads}
              onChange={e => this.setState({ uploads: e.target.onDrop })}
            />
            <form className="form-container">
              <TextField
                id="filled-select-category"
                label="What's on your mind?"
                fullWidth
                margin="normal"
                value={this.state.name}
                onChange={e => this.setState({ text: e.target.value })}
                variant="outlined"
              />
              <div className="">
                <TextField
                  id="filled-select-category"
                  select
                  label="Select"
                  value={this.state.category}
                  onChange={e => this.setState({ category: e.target.value })}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText="Please select your category"
                >
                  {category.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="post_button_container">
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

export default Articles;
