
import React from "react";
import { useState } from "react";
import bubble from "../assets/rektorat_buble.png";
import CardAlumni from "../components/CardAlumni";
const Alumni = () => {
    const [isOpen, setIsOpen] = useState(false);
  

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };


    

    const dummy = [
      {
        Nama: "Ikhlasul Amal",
        Fakultas: "Ilmu Komputer",
        Prodi: "Pendidikan Teknologi Informasi",
        Pekerjaan: "Data Scentist",
        Perusahaan: "Goto Company",
        Angkatan: 22,
        Image: "https://source.unsplash.com/random/900×700/?pig"
      },
      {
        Nama: "Raditya Dika",
        Fakultas: "Ekonomi dan Bisnis",
        Prodi: "Manajemen",
        Pekerjaan: "Manajer Pemasaran",
        Perusahaan: "Unilever",
        Angkatan: 23,
        Image: "https://source.unsplash.com/random/900×700/?marketing"
      },
      {
        Nama: "Putri Tanjung",
        Fakultas: "Hukum",
        Prodi: "Ilmu Hukum",
        Pekerjaan: "Pengacara",
        Perusahaan: "LBH Jakarta",
        Angkatan: 21,
        Image: "https://source.unsplash.com/random/900×700/?law"
      },
      {
        Nama: "Rizky Febian",
        Fakultas: "Kedokteran",
        Prodi: "Pendidikan Dokter",
        Pekerjaan: "Dokter Spesialis Anak",
        Perusahaan: "Rumah Sakit Harapan Kita",
        Angkatan: 20,
        Image: "https://source.unsplash.com/random/900×700/?doctor"
      },
      {
        Nama: "Bintang Pamungkas",
        Fakultas: "Teknik",
        Prodi: "Teknik Mesin",
        Pekerjaan: "Insinyur Mesin",
        Perusahaan: "PT Dharma Jaya",
        Angkatan: 24,
        Image: "https://source.unsplash.com/random/900×700/?engineering"
      },
      {
        Nama: "Aisyah Istri",
        Fakultas: "Pertanian",
        Prodi: "Agroteknologi",
        Pekerjaan: "Peneliti Pertanian",
        Perusahaan: "Balai Penelitian Tanaman Pangan",
        Angkatan: 22,
        Image: "https://source.unsplash.com/random/900×700/?agriculture"
      },
      {
        Nama: "Rangga Almarhum",
        Fakultas: "Sains dan Teknologi",
        Prodi: "Teknik Informatika",
        Pekerjaan: "Programmer",
        Perusahaan: "Gojek",
        Angkatan: 23,
        Image: "https://source.unsplash.com/random/900×700/?coding"
      },
      {
        Nama: "Lesti Andryani",
        Fakultas: "Psikologi",
        Prodi: "Psikologi",
        Pekerjaan: "Psikolog Klinis",
        Perusahaan: "Klinik Tumbuh Kembang Anak",
        Angkatan: 21,
        Image: "https://source.unsplash.com/random/900×700/?psychology"
      },
      {
        Nama: "Rizky Nurfadillah",
        Fakultas: "Ilmu Sosial dan Ilmu Politik",
        Prodi: "Hubungan Internasional",
        Pekerjaan: "Diplomat",
        Perusahaan: "Kementerian Luar Negeri RI",
        Angkatan: 24,
        Image: "https://source.unsplash.com/random/900×700/?diplomacy"
      },
      {
        Nama: "Muhammad Rizieq",
        Fakultas: "Ilmu Budaya",
        Prodi: "Sastra Inggris",
        Pekerjaan: "Penulis Buku",
        Perusahaan: "Penerbit Gramedia",
        Angkatan: 22,
        Image: "https://source.unsplash.com/random/900×700/?book"
      }
    ];


    return (
        <div className="bg-primary-white font-helvetica-regular">
            <section className=" h-screen relative">
                <div className="container flex items-center h-full px-24 mx-auto">
                    <div className="w-1/2 font-helvetica-extraBold relative z-40 ">
                        <h1 className="text-primary-charcoalGray text-6xl text-shadow-heading">
                            Profil Alumni
                        </h1>
                        <h1 className="text-primary-tealBlue text-6xl text-shadow-heading">
                            EM UB 2024
                        </h1>
                        <div className="border mt-5 border-primary-charcoalGray bg-primary-white shadow-lg flex w-4/5 h-fit rounded-md relative">
                            <div
                                onClick={() => handleDropdown()}
                                className="w-1/6   p-3 border-r border-primary-charcoalGray"
                            >
                                <div className="aspect-square w-full bg-purple-400 rounded-md"></div>
                            </div>
                            <div className="w-full  p-1 flex">
                                <input
                                    type="text"
                                    placeholder="Cari di Profil Alumni"
                                    className="p-2  size-full focus:outline-none bg-primary-white"
                                />
                                <div className="h-full aspect-square bg-primary-tealBlue rounded-lg"></div>
                            </div>
                            <div
                                className={`${
                                    isOpen ? "block" : "hidden"
                                } absolute top-[calc(100%+8px)] border border-primary-charcoalGray divide-y divide-primary-charcoalGray rounded-md shadow-lg`}
                            >
                                <div className="px-4 py-1">Fakultas</div>
                                <div className="px-4 py-1">Jurusan</div>
                                <div className="px-4 py-1">Angkatan</div>
                                <div className="px-4 py-1">Perusahaan</div>
                            </div>
                        </div>
                    </div>
                    <img
                        src={bubble}
                        draggable="false"
                        className="aspect-auto h-full absolute right-0 top-0"
                        alt=""
                    />
                </div>
            </section>
            <section className="container mx-auto px-24 grid gird-cols-1 py-10 md:grid-cols-2  lg:grid-cols-3 grid-rows-1 gap-10">
              {
                dummy.map((item,index)=>(
                  <CardAlumni fakultas={item.Fakultas} image={item.Image} nama={item.Nama} pekerjaan={item.Pekerjaan} perusahaan={item.Perusahaan} prodi={item.Prodi} key={index}  angkatan={item.Angkatan} />
                ))
              }
             
            </section>
        </div>
    );
};

export default Alumni;
