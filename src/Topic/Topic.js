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
      uploads: "",
      images: "",
      video: "",
      audio: "",
      articles: "",
      title: "",
      description: "",
      tips: "",
      discussions: "",
      value: ""
    };
  }
  

  handleSubmit = event => {
    event.preventDefault();
    const {
      audio,
      video,
      title,
      description,
      discussions,
      tips,
      images,
      articles
    } = this.state;
    alert(`Your state values: \n
          title: ${title} \n
          description: ${description} \n
            audio: ${audio} \n
            video: ${video} \n
            tips: ${tips} \n
            discussions: ${discussions} \n
            articles: ${articles} \n
            images: ${images}`);
  };
  onChange = editorState => {
    const MAX_LENGTH = 10;
    const length = editorState.getCurrentContent().getPlainText("").length;

    if (length <= MAX_LENGTH) {
      this.setState({ editorState });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <header className="new-article__header"> ADD NEW TIPS</header>
        <div className="new-article__container">
          <div className="article__attachment " onSubmit={this.handleSubmit}>
            <FileUpload
              onDrop={this.state.uploads}
              onChange={e => this.setState({ uploads: e.target.onDrop })}
            />
            <form className="form-container" onSubmit={this.handleSubmit}>
              <TextField
                id="outlined-mind-input"
                label="Tip Title"
                fullWidth
                type="text"
                name="What's on your mind?"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
                margin="normal"
                variant="outlined"
              />
              <div className="">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  multiline
                  rowsMax="4"
                  fullWidth
                  margin="normal"
                  helperText="hello"
                  variant="outlined"
                  value={this.state.description}
                  onChange={e => this.setState({ description: e.target.value })}
                />
              </div>
              <div className="post_button_container">
                <div className="checkbox-wrapper" col-sm-4>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          // checkedIcon={<CheckBoxIcon fontSize="small" />}
                          value={this.state.video}
                          // checked={this.state.video}
                          onChange={e => this.setState({ video: e.target.value })}
                         
                        />
                      }
                      label="Videos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          // checkedIcon={<CheckBoxIcon fontSize="small" />}
                          value="images"
                          // checked={this.state.images}
                          onChange={this.handleImageChange}
                        />
                      }
                      // control={<Checkbox checked={this.state.video} />}
                      label="Images"
                    />
                    <FormControlLabel
                      // control={<Checkbox checked={this.state.audio} />}
                      // label="Audio"
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          // checkedIcon={<CheckBoxIcon fontSize="small" />}
                          value="audio"
                          // checked={this.state.audio}
                          onChange={this.handleAudioChange}
                        />
                      }
                      // control={<Checkbox checked={this.state.video} />}
                      label="Audio"
                    />
                    <br />
                    <FormControlLabel
                      // control={<Checkbox checked={this.state.articles} />}
                      // label="Articles"
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          // checkedIcon={<CheckBoxIcon fontSize="small" />}
                          value="articles"
                          // checked={this.state.articles}
                          onChange={this.handleArticleChange}
                        />
                      }
                      // control={<Checkbox checked={this.state.video} />}
                      label="Articles"
                    />
                    <FormControlLabel
                      // control={<Checkbox checked={this.state.tips} />}
                      // label="Tips"
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          // checkedIcon={<CheckBoxIcon fontSize="small" />}
                          value="tips"
                          // checked={this.state.tips}
                          onChange={this.handleTipsChange}
                        />
                      }
                      label="Tips"
                    />
                    <FormControlLabel
                      // control={<Checkbox checked={this.state.tips} />}
                      // label="Discussions"
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          // checkedIcon={<CheckBoxIcon fontSize="small" />}
                          value="discussions"
                          // checked={this.state.discussions}
                          onChange={this.handleDiscussionsChange}
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
