import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

import "../styles/landingPage.css";


import ProkerUnggulan from "../components/sections/landingPage/ProkerUnggulan";
import NilaiDasarOrganisasi from "../components/sections/landingPage/NilaiDasarOrganisasi";
import TautanPintas from "../components/sections/landingPage/TautanPintas";
import HeroSection from "../components/sections/landingPage/HeroSection";
import VisiMisi from "../components/sections/landingPage/VisiMisi";
import Berita from "../components/sections/landingPage/Berita";


const LandingPage = () => {
  
    return (
        <div className="scroll-smooth bg-primary-white" >
            <HeroSection />
            <section className=" container mx-auto px-4 lg:px-24 w-full flex flex-col-reverse gap-4 lg:flex-row py-5 lg:py-10 items-center justify-between ">
                <div className="lg:w-3/5 w-4/5 font-helvetica-extraBold flex-col flex gap-3 lg:gap-10 text-primary-charcoalGray">
                    <h1 className="text-2xl  lg:text-7xl font-bold">
                        EM UB 2024 Kabinet Cerita Kita
                    </h1>
                    <p className="text-base lg:text-3xl font-semibold">
                        <span className="bg-gradient-to-br from-primary-navbarText from-10% inline-block font-helvetica-extraBold to-primary-tealBlue bg-clip-text text-transparent font-bold">
                            Ceritera
                        </span>{" "}
                        adalah bahasa tidak baku dari{" "}
                        <span className="bg-gradient-to-br from-primary-navbarText from-10% inline-block font-helvetica-extraBold to-primary-tealBlue bg-clip-text text-transparent font-bold">
                            Cerita
                        </span>{" "}
                        . Mimpi kami adalah mimpi Brawijaya, sehingga cerita
                        kami adalah cerita Brawijaya.
                    </p>
                </div>
                <div className="w-2/5 bg-green-400 aspect-square self-center lg:self-auto"></div>
            </section>
            <VisiMisi />
          

            <ProkerUnggulan />
            <NilaiDasarOrganisasi />
            <Berita/>
            <TautanPintas />
        </div>
    );
};

export default LandingPage;
