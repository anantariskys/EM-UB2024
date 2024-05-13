import React from "react";
import { useState } from "react";
import Collapse from "../../Collapse";

const ArahanStrategis = () => {
    const data = [
        {
            title: "Satuan Pengendali Internal",
            desc: [
                "Pengawasan terhadap kinerja Kementerian dan Kedirjenan di EM Brawijaya dalam aspek fungsional, operasional, serta keuangan.",
                "Memberikan edukasi kepada pengurus EM Brawijaya atas alur dan fungsi administrasi, keuangan, penggunaan data, dan manajemen internal.",
                "Menyusun, melakukan sosialisasi bersama pengaju, serta mengawasi implementasi Standar Operasional Prosedur (SOP).",
                "Melaksanakan pemantauan melalui kegiatan audit untuk segala dokumen administratif seperti proposal, buku induk, LPJ, pencairan anggaran SIAT, dan administrasi lainnya.",
                "Menjaga rumah tangga internal EM Brawijaya tetap kokoh baik secarapengembangan tiap pengurusnya.",
                "Memastikan kebutuhan Kementerian dalam hal administratif, keuangan, dan pendataan bisa terinventarisir.",
                "Mengadakan forum bersama Ormawa UB untuk membahas dan mensosialisasikan alur birokrasi yang juga sinergis bersama Rektorat.",
            ],
        },
        {
            title: "Pengukuhan dan Pemberdayaan Masyarakat",
            desc: [
                "Hadir sebagai wujud pengabdian UB kepada masyarakat Kota Malang dan Malang Raya",
                "Memetakan dan memproyeksikan masalah serta potensi di sektor pengabdian kemasyarakatan lingkungan yang ada di Jawa Timur",
                "Mengedepankan keberanjutan dan kebermanfaatan yang tepat sasaran kepada masyarakat",
                "Membuka dan membina komunikasi dengan elemen EM Brawijaya perihal roadmap pengabdian, kemasyarakatan, dan lingkungan yang akan dibawa",
                "Membuka serta membina komunikasi dengan elemen masyarakat mulai dari tingkat Kota Malang, Malang Raya, Jawa Timur dan Indonesia",
            ],
        },
        {
            title: "Pengembangan",
            desc: [
                "Menciptakan wadah dan ekosistem yang meng-optimalkan peran jaring, bina, dan proyeksi untuk pengembangan minat, bakat, akademik, keilmuan, kepemimpinan bagi EM Brawijaya",
                "Menjadi wadah inkubator yang suportif, dan yang inklusif",
                "Mendorong mahasiswa UB untuk ber-prestasi dan meningkatkan prestasi Universitas Brawijaya dan mengharumkan UB sampai ke tingkat Internasional",
            ],
        },
        {
            title: "Pergerakan",
            desc: [
                "Menciptakan wadah dan ekosistem yang meng-optimalkan peran jaring, bina, dan proyeksi untuk pengembangan minat, bakat, akademik, keilmuan, kepemimpinan bagi EM Brawijaya",
                "Menjadi wadah inkubator yang suportif, dan yang inklusif",
                "Mendorong mahasiswa UB untuk ber-prestasi dan meningkatkan prestasi Universitas Brawijaya dan mengharumkan UB sampai ke tingkat Internasional",
            ],
        },
        {
            title: "Pelayanan dan Jaringan Organisasi",
            desc: [
                "Mewujudkan hubungan antara EM dan elemen internal maupun eksternal UB yang komunikatif, inklusif, partisipatif, guna mewujudkan relasi yang sinergis dan mutualisme",
                "Membuka dan membina hubungan seluas-luasnya baik antara elemen EM Brawijaya, Rektorat, IKA UB, dan berbagai elemen lainnya",
                "Secara membumi dan kreatif, menjaga alur informasi program kerja dan kegiatan EM Brawijaya agar dapat tersampaikan secara akurat",
                "Membuat segala program dan kegiatan yang dilakukan oleh EM Brawijaya bukan hanya ada tapi harus nampak ada",
                "Menciptakan, menjaga, dan mengembangkan wajah EM Brawijaya di mata LKM UB, Jawa Timur, Indonesia, dan Internasional",
            ],
        },
    ];

    return (
        <section className="container mx-auto px-4 lg:px-24 py-10">
            <div className="flex w-full lg:gap-5 gap-2  items-end justify-start mb-10">
                <div className="w-full h-0.5 lg:h-1 bg-gradient-to-r from-primary-skyBlue to-primary-tealBlue"></div>
                <h1 className="text-primary-charcoalGray text-2xl lg:text-5xl font-black  font-helvetica-extraBold w-fit whitespace-nowrap ">
                    Arahan Strategis
                </h1>
            </div>
            <Collapse data={data[0].desc}>{data[0].title}</Collapse>
            <div className="flex flex-col lg:flex-row mt-5 gap-5">
                <div className="lg:w-1/2 w-full flex flex-col gap-5">
                    <Collapse bg="bg-[#2D9596]" data={data[1].desc}>{data[1].title}</Collapse>
                    <Collapse  data={data[2].desc}>{data[2].title}</Collapse>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col gap-5">
                    <Collapse bg="bg-[#628E90]" data={data[3].desc}>{data[3].title}</Collapse>
                    <Collapse bg="bg-[#408CA5]" data={data[4].desc}>{data[4].title}</Collapse>
                </div>
            </div>
        </section>
    );
};

export default ArahanStrategis;
