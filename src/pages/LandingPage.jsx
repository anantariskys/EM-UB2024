import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

import "../styles/landingPage.css";


import ProkerUnggulan from "../components/sections/landingPage/ProkerUnggulan";
import NilaiDasarOrganisasi from "../components/sections/landingPage/NilaiDasarOrganisasi";
import TautanPintas from "../components/sections/landingPage/TautanPintas";
import HeroSection from "../components/sections/landingPage/HeroSection";
import VisiMisi from "../components/sections/landingPage/VisiMisi";

const LandingPage = () => {
  
    return (
        <div className="scroll-smooth bg-white" >
            <HeroSection />
            <section className="px-24 w-full flex flex-col py-10 justify-between bg-white">
                <div className="w-3/5 font-helvetica-regular flex-col flex gap-10 text-primary-charcoalGray">
                    <h1 className="text-7xl font-bold">
                        EM UB 2024 Kabinet Cerita Kita
                    </h1>
                    <p className="text-3xl font-semibold">
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
            </section>
            <VisiMisi />
          

            <ProkerUnggulan />
            <NilaiDasarOrganisasi />
            <TautanPintas />
        </div>
    );
};

export default LandingPage;
