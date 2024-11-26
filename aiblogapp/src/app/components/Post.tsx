"use client";

import { useState } from "react";
import { QuillEditor, quillModules, QuillFormats } from "./QuillEditor";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
    const [copilotText, setCopilotText] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [publishTaskRunning, setPublishTaskRunning] = useState(false);

    const handleEditorChange = (newContent: string) => {
        setCopilotText(newContent);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setPublishTaskRunning(true);
            // TODO: Implement post submission logic
            console.log({ title: articleTitle, content: copilotText });
        } finally {
            setPublishTaskRunning(false);
        }
    };

    return (
        <div className="p-3 max-w-3xl mx-auto min-h-screen">
            <h1 className="text-center text-white text-3xl my-7 font-semibold">
                Create a Post
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row justify-between">
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={articleTitle}
                        onChange={(e) => setArticleTitle(e.target.value)}
                        className="flex-1 block w-full rounded-lg border text-sm border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 p-2.5"
                    />
                </div>

                <QuillEditor
                    onChange={handleEditorChange}
                    modules={quillModules}
                    formats={QuillFormats}
                    className="bg-gray-700 rounded-lg h-80 mb-12 text-white"
                />

                <button
                    type="submit"
                    disabled={publishTaskRunning}
                    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
                        publishTaskRunning
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-blue-700"
                    }`}
                >
                    {publishTaskRunning ? "Publishing..." : "Publish"}
                </button>
            </form>
        </div>
    );
}