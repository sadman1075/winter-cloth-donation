import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Root from "../Components/Root/Root";
import Error from "../Components/Error/Error";
import Help from "../Components/Help/Help";
import DonationCampaigns from "../Components/DonationCampaigns/DonationCampaigns";
import DonationDetails from "../Components/DonationDetails/DonationDetails";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/help",
                element: <Help></Help>
            },
            {
                path: "/donation-campaigns",
                element: <DonationCampaigns></DonationCampaigns>
            },
            {
                path: "/donation-details/:id",
                element: <PrivateRoutes><DonationDetails></DonationDetails></PrivateRoutes>,
                loader: () => fetch("/donations.json")
            },
            {
                path: "/dashboard",
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: "/update-profile",
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            }
        ]

    },
    {
        path: "/registration",
        element: <Registration></Registration>
    },
    {
        path: "/login",
        element: <Login></Login>
    },

    {
        path: "*",
        element: <Error></Error>
    }
])