import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";

const TautanForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:3000/users", { title, content });
      console.log("Images submitted:", selectedImages);
      console.log("Selected option:", selectedOption);
      // setSelectedImage("");
      // (res) => console.log(res);
      alert("Berita berhasil diunggah!");
      // console.log(res);
      setTitle("");
      setContent("");
      window.location.reload();
    } catch (error) {
      alert("Gagal mengunggah berita!");
      console.error("Gagal mengunggah berita:", error);
    }
  };

  return (
    <div>
    <SideBar className="z-0" />
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm  drawer-content absolute left-[40%] top-[20%]">
      <h2 className="text-2xl font-bold mb-4">Unggah Tautan Baru</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Tautan"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
          className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
        />

        <textarea
          placeholder="Link Tautan"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required={true}
          className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full h-32"
        ></textarea>
        <h2 className="text-xl font-bold mb-4">Unggah Gambar Pendukung</h2>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Unggah Berita
        </button>
      </form>
    </div>
    </div>
  );
};

export default TautanForm;
