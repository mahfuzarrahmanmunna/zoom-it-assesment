import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Register from "../Pages/Auth/Register/Register";

export const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayouts />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            },
            {
                path: '/contact-us',
                element: <Contact/>
            },
        ]
    },
    {
        path: '/register',
        element: <Register/>
    }
])