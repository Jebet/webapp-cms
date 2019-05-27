import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "./fileUploader.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class FileUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        {
          source: "index.html",
          options: {
            type: "local"
          }
        }
      ]
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    return (
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
    );
  }
}
export default FileUploader;
