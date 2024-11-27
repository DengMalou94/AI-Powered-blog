import { useRef, useState } from "react";
import { QuillEditor } from "./QuillEditor";
import { quillModules, quillFormats } from "./QuillEditor";

const YourComponent = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <QuillEditor 
        value={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default YourComponent;
