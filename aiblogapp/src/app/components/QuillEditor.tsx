"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

export const QuillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
  "align",
  "color",
  "background",
];

interface QuillEditorProps {
  onChange: (value: string) => void;
  modules?: any;
  formats?: string[];
  className?: string;
}

export function QuillEditor({ onChange, modules = quillModules, formats = QuillFormats, className }: QuillEditorProps) {
  return (
    <div className={className}>
      <ReactQuill
        theme="snow"
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}