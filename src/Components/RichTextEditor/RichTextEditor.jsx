import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ value, handleChange }) => {
  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
