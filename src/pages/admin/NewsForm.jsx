import React, { useState } from "react";
import axios from "axios";

const NewsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/posts", { title, content });
      alert("Berita berhasil diunggah!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Gagal mengunggah berita:", error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Unggah Berita Baru</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul Berita"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
        />
        <textarea
          placeholder="Isi Berita"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Unggah Berita
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
