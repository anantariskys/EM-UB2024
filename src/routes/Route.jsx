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
import Struktur from "../pages/struktur/Struktur";
import AdminPage from "../pages/admin/AdminPage";
import Login from "../pages/admin/Login";
import GuestRoute from "./visibility/GuestRoute";
import PrivateRoute from "./visibility/PrivateRoute";
import { AuthProvider } from "../hooks/useAuth";

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
    path: "/struktur/djo",
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
    path: "struktur",
    element: (
    <PageLayout>
      <Struktur />
    </PageLayout>)
  },
  {
    path:'/',
    element: <GuestRoute />,
    children: [
      {
        path: "/auth",
        element: <Login/>,
      },
    ],
  },
  {
    path:'/',
    element: <PrivateRoute/>,
    children: [
      {
        path: "adminnnn",
        element: <AdminPage />,
      },
     
    
    ],
  },
 
  {
    path: "/*",
    element: <div>Not found</div>,
  },
 
]);

const Route = () => {
  return (
   
      <AuthProvider>
        <RouterProvider router={createRouter} />
      </AuthProvider>
   
  );
};

export default Route;
