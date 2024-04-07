import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import ComingSoon from '../pages/ComingSoon'
import LandingPage from "../pages/LandingPage";
import Tentang from "../pages/Tentang";


const createRouter = createBrowserRouter([
    {
        path: "/",
        element:<PageLayout>
            <LandingPage/>
        </PageLayout>
    },
    {
        path: "/tentang",
        element:<PageLayout>
            <Tentang/>
        </PageLayout>
    },
    {
        path: "/comingsoon",
        element:<ComingSoon/>
    },
   
]);

const Route = () => {
    return <RouterProvider router={createRouter} />;
};

export default Route;
