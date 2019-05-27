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


import "./Articles.css";
import "./styles.scss";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

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
    return (
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
              <Editor
                // toolbarOnFocus
                spellCheck
                placeholder=" Description"
                editorState={editorState}
                toolbarClassName="rdw-storybook--toolbar"
                editorClassName="rdw-storybook-editor"
                hashtag={{ hashCharacter: "#", separator: " " }}
                onEditorStateChange={this.onChange}
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
    );
  }
}

export default Articles;
