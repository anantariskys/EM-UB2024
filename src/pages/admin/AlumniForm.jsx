import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";

const AlumniForm = () => {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [kerja, setKerja] = useState("");
  const [perusahaan, setPerusahaan] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  //   Image
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);

    const newPreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(newPreviews).then((images) => {
      setPreviews(images);
    });
  };

  const handleCancel = () => {
    setSelectedImages([]);
    setPreviews([]);
  };
  //   Dropdown
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "option1", label: "KOMINFO" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/users")
  //     .then((res) => console.log(res))
  //     .catch((er) => console.log(er));
  // }, []);
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
      setNama("");
      setAngkatan("");
      setJurusan("");
      setKerja("");
      setPerusahaan("");
      setFakultas("");
      setFakultas("");
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
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm  drawer-content absolute left-[40%] top-[10%]">
        <h2 className="text-2xl font-bold mb-4">Unggah Program Kerja Baru</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nama Alumni"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required={true}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            placeholder="Jurusan"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
            required={true}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            placeholder="Fakultas"
            value={fakultas}
            onChange={(e) => setFakultas(e.target.value)}
            required={true}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            placeholder="Angkatan"
            value={angkatan}
            onChange={(e) => setAngkatan(e.target.value)}
            required={true}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            placeholder="Pekerjaan"
            value={kerja}
            onChange={(e) => setKerja(e.target.value)}
            required={true}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            placeholder="Perusahaan"
            value={perusahaan}
            onChange={(e) => setPerusahaan(e.target.value)}
            required={true}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            placeholder="LinkedIn"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            required={true}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-2 block w-full"
          />

          {/* <h2 className="text-xl font-bold mb-4">Unggah Gambar Pendukung</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="images"
          >
            Images
          </label>
          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {previews.length > 0 && (
            <div className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                {previews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Selected ${index}`}
                    className="max-w-full h-auto rounded-lg"
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleCancel}
                className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          )}
        </div> */}
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

export default AlumniForm;
