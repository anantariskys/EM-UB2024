import { useScroll,motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const sambutan =[
    'Assalamualaikum Warahmatullahi Wabarakatuh, Shalom, Om Swastyastu, Namo Buddhaya, Salam Kebajikan.',
    "Hidup Mahasiswa! Hidup Rakyat Indonesia!",
    "Puji dan syukur selalu kami panjatkan kepada Tuhan YME atas rahmat dan karunia-Nya yang tak terhingga dalam melangkah bersama kami. Sebuah perjalanan yang penuh makna kami jalani sebagai Eksekutif Mahasiswa Universitas Brawijaya bersama kabinet Ceritera Kita.",
    "Kami hadir dengan semangat baru untuk mengukir cerita yang segar, dalam kemasan yang baru untuk setiap elemen yang membangun Brawijaya. Bersama-sama, kami bertekad untuk menjadikan setiap langkah kami sebagai tonggak keberhasilan dan inovasi.",
    "terdapat beragam elemen yang telah menemani perjalanan CeriteraKita, menjadi pilar dalam pencapaian tujuan kami. Kami ingin mengucapkan rasa terima kasih kepada semua yang telah memberikan dukungan, memastikan kelancaran setiap langkah kami, dan memungkinkan kami merangkai perjalanan kami dengan nilai dan makna yang mendalam di dalam platform Eksekutif Mahasiswa Universitas Brawijaya.",
    "Eksekutif Mahasiswa Universitas Brawijaya bertekad memberikan dampak positif dengan melibatkan seluruh unsur dalam pengembangan prestasi, layanan mahasiswa, pengabdian, dan gerakan kebangsaan. Bersama dengan Keluarga Besar Mahasiswa Universitas Brawijaya, kami berupaya menciptakan narasi baru untuk memajukan Brawijaya.",
    "KITA SATU BRAWIJAYA!",
    "Wassalamualaikum Wr.Wb",
    "EKSEKUTIF MAHASISWA UNIVERSITAS KABINET CERITERA KITA"
]

const SambutanScroll = () => {
    const target = useRef(null);

    const { scrollYProgress } = useScroll({
      target: target,
      offset: ["start end", "start center"],
  });

  const x = useTransform(scrollYProgress, [0,1], [200,0]);
  return (
    <div ref={target} className="text-xl w-4/5 lg:w-3/5">
          <motion.h3
    style={{
        x:x
    }}
    className="text-sm   lg:text-4xl text-center mb-5 text-shadow-heading  self-center text-primary-tealBlue font-helvetica-extraBold ">
        Presiden dan Wakil Presiden
    </motion.h3>
            <div className="flex flex-col gap-5 text-base">
                {
                    sambutan.map((item,index)=>(
                        <Paragraph key={index} paragraph={item} />
                    ))
                }
            {/* <p className="font-bold">
                Assalamualaikum Warahmatullahi Wabarakatuh,
                Shalom, Om Swastyastu, Namo Buddhaya, Salam
                Kebajikan.{" "}
            </p>

            <p>Hidup Mahasiswa! Hidup Rakyat Indonesia!</p>
            <p>
                Puji dan syukur selalu kami panjatkan kepada
                Tuhan YME atas rahmat dan karunia-Nya yang tak
                terhingga dalam melangkah bersama kami. Sebuah
                perjalanan yang penuh makna kami jalani sebagai
                Eksekutif Mahasiswa Universitas Brawijaya
                bersama kabinet Ceritera Kita.
            </p>
            <p>
                Kami hadir dengan semangat baru untuk mengukir
                cerita yang segar, dalam kemasan yang baru untuk
                setiap elemen yang membangun Brawijaya.
                Bersama-sama, kami bertekad untuk menjadikan
                setiap langkah kami sebagai tonggak keberhasilan
                dan inovasi.
            </p>
            <p>
                terdapat beragam elemen yang telah menemani
                perjalanan CeriteraKita, menjadi pilar dalam
                pencapaian tujuan kami. Kami ingin mengucapkan
                rasa terima kasih kepada semua yang telah
                memberikan dukungan, memastikan kelancaran
                setiap langkah kami, dan memungkinkan kami
                merangkai perjalanan kami dengan nilai dan makna
                yang mendalam di dalam platform Eksekutif
                Mahasiswa Universitas Brawijaya.
            </p>
            <p>
                Eksekutif Mahasiswa Universitas Brawijaya
                bertekad memberikan dampak positif dengan
                melibatkan seluruh unsur dalam pengembangan
                prestasi, layanan mahasiswa, pengabdian, dan
                gerakan kebangsaan. Bersama dengan Keluarga
                Besar Mahasiswa Universitas Brawijaya, kami
                berupaya menciptakan narasi baru untuk memajukan
                Brawijaya.
            </p>
            <p>KITA SATU BRAWIJAYA!</p>
            <p className="font-bold">Wassalamualaikum Wr.Wb</p>
            <p className="font-bold">
                EKSEKUTIF MAHASISWA UNIVERSITAS
                KABINET CERITERA KITA
            </p> */}
            </div>
            <h3 className=" text-lg lg:text-4xl font-helvetica-extraBold text-shadow-heading bg-gradient-to-b from-primary-tealBlue to-primary-charcoalGray bg-clip-text text-transparent text-center mt-5">
                #MimpiPengukirCeritera
            </h3>
        </div>
  )
}
const Paragraph = ({paragraph})=>{
    const target = useRef(null)

    const { scrollYProgress}=useScroll({
        target:target,
        offset:[window.innerWidth>768?"start 0.6":"start center","end center"]
    })
    const words = paragraph.split(" ")
    return (
        <p
        ref={target}
        className="flex flex-wrap text-p text-sm lg:text-base  text-primary-tealBlue font-semibold "
        >
            {
                words.map((item,index)=>{
                    const start = index / words.length;
                    const end = start + (1 / words.length);

                    return <Word key={index} index={index} range={[start,end]} progress={scrollYProgress}>{item}</Word>
})
            }

        </p>
    )
}

const Word =({children,progress,range,index})=>{
    const opacity = useTransform(progress,range,[0,1])
    return(
        <span className="relative">
            <span className="absolute opacity-40 lg:mr-4 mr-2 leading-relaxed lg:leading-8">
                {children}
            </span>
        <motion.span
        style={{opacity}}
        className={` lg:mr-4 mr-2 leading-relaxed lg:leading-8`}
        >
            {children}
        </motion.span>
            </span>

    )
}

export default SambutanScroll