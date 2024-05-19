import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import ComingSoon from "../pages/ComingSoon";
import LandingPage from "../pages/LandingPage";
import Tentang from "../pages/Tentang";
import Berita from "../pages/Berita";
import Proker from "../pages/Proker";
import DetailProker from "../pages/DetailProker";
import DetailBerita from "../pages/DetailBerita";
import Alumni from "../pages/Alumni";
import KoordinatorPengembangan from "../pages/struktur/KoordinatorPengembangan";
import KoordinatorPergerakan from "../pages/struktur/KoordinatorPergerakan";
import KoordinatorDJO from "../pages/struktur/KoordinatorDJO";
import KoordinatorSPI from "../pages/struktur/KoordinatorSPI";
import KoordinatorPPM from "../pages/struktur/KoordinatorPPM";
import NewsForm from "../pages/admin/NewsForm";
import ProkerForm from "../pages/admin/ProkerForm";
import StrukturPres from "../pages/struktur/StrukturPres";
import Struktur from "../pages/struktur/Struktur";
import AdminPage from "../pages/admin/AdminPage";
import TautanForm from "../pages/admin/TautanForm";
import AlumniForm from "../pages/admin/AlumniForm";

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <LandingPage />
      </PageLayout>
    ),
  },
  {
    path: "/tentang",
    element: (
      <PageLayout>
        <Tentang />
      </PageLayout>
    ),
  },
  {
    path: "/berita",
    element: (
      <PageLayout>
        <Berita />
      </PageLayout>
    ),
  },
  {
    path: "/proker",
    element: (
      <PageLayout>
        <Proker />
      </PageLayout>
    ),
  },
  {
    path: "/proker/:id",
    element: (
      <PageLayout>
        <DetailProker />
      </PageLayout>
    ),
  },
  {
    path: "/berita/:id",
    element: (
      <PageLayout>
        <DetailBerita />
      </PageLayout>
    ),
  },
  {
    path: "/profile-alumni",
    element: (
      <PageLayout>
        <Alumni />
      </PageLayout>
    ),
  },
  {
    path: "/alumni",
    element: (
      <PageLayout>
        <Alumni />
      </PageLayout>
    ),
  },
  {
    path: "/struktur/pengembangan",
    element: (
      <PageLayout>
        <KoordinatorPengembangan />
      </PageLayout>
    ),
  },
  {
    path: "/struktur/pergerakan",
    element: (
      <PageLayout>
        <KoordinatorPergerakan />
      </PageLayout>
    ),
  },
  {
    path: "/struktur/diplomasi-dan-jaringan-organisasi",
    element: (
      <PageLayout>
        <KoordinatorDJO />
      </PageLayout>
    ),
  },
  {
    path: "/struktur/spi",
    element: (
      <PageLayout>
        <KoordinatorSPI />
      </PageLayout>
    ),
  },
  {
    path: "/struktur/ppm",
    element: (
      <PageLayout>
        <KoordinatorPPM />
      </PageLayout>
    ),
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
  {
    path: "/*",
    element: <div>Not found</div>,
  },
  {
    path: "/adminnnn",
    element: <AdminPage />,
  },
  {
    path: "/upberita",
    element: <NewsForm />,
  },
  {
    path: "/upproker",
    element: <ProkerForm />,
  },
  {
    path: "/upalumni",
    element: <AlumniForm />,
  },
  {
    path: "/uptautan",
    element: <TautanForm />,
  },
  // {
  //   path: "/upberita",
  //   element: <NewsForm />,
  // },
  // {
  //   path: "/upberita",
  //   element: <NewsForm />,
  // },
  {
    path: "/struktur",
    element: <Struktur />,
  },
]);

const Route = () => {
  return <RouterProvider router={createRouter} />;
};

export default Route;
