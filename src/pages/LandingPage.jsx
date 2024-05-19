import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

import "../styles/landingPage.css";


import ProkerUnggulan from "../components/sections/landingPage/ProkerUnggulan";
import NilaiDasarOrganisasi from "../components/sections/landingPage/NilaiDasarOrganisasi";
import TautanPintas from "../components/sections/landingPage/TautanPintas";
import HeroSection from "../components/sections/landingPage/HeroSection";
import VisiMisi from "../components/sections/landingPage/VisiMisi";
import Berita from "../components/sections/landingPage/Berita";
import CeriteraKita from "../components/sections/landingPage/CeriteraKita";


const LandingPage = () => {
  
    return (
        <div className="scroll-smooth bg-primary-white" >
            <HeroSection />
            <CeriteraKita/>
         
            <VisiMisi />
          

            <ProkerUnggulan />
            <NilaiDasarOrganisasi />
            <Berita/>
            <TautanPintas />
        </div>
    );
};

export default LandingPage;
