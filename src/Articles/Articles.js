import React, { Component } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import TextField from "@material-ui/core/TextField";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from "semantic-ui-react";
import FileUpload from "../FileUploader/fileUploader";

import "./Articles.css";
import "./styles.scss";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: " ",
      description: " ",
      uploads: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert(JSON.stringify(this.state, null, "  "));
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
    return (
      <div>
        <header className="new-article__header">ADD NEW ARTICLE</header>
        <div className="new-article__container">
          <div className="article__attachment " onSubmit={this.handleSubmit}>
            <FileUpload
              value={this.state.uploads}
              onChange={e => this.setState({ uploads: e.target.value })}
            />
            <form className="form-container">
              <TextField
                id="outlined-full-width"
                label="Article Title"
                fullWidth
                margin="normal"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
                variant="outlined"
                className="textfield"
              />
              <div className="form-editor-container">
                <Editor
                  // toolbarOnFocus
                  minCharacters={50}
                  spellCheck
                  placeholder=" Description"
                  editorState={editorState}
                  toolbarClassName="rdw-storybook--toolbar"
                  editorClassName="rdw-storybook-editor"
                  hashtag={{ hashCharacter: "#", separator: " " }}
                  value={this.state.description}
                  onChange={e => this.setState({ description: e.target.value })}
                  toolbar={{
                    options: ["inline", "emoji", "image", "textAlign", "link"],
                    inline: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true }
                  }}
                />
              </div>
              <div className="post_button_container">
                <Button className="post_button">Post Now</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
