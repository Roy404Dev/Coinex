import "./sass/style.scss";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DashboardLayout from "./layout/DashboardLayout/DashboardLayout";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout/MainLayout";
import About from "./pages/About/About";
import PrivateRoute from "./pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard", // path for the index route
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/dashboard/wallet",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/markets",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/events",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/trading",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/calculator",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/crypto-news",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/settings",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },
] as RouteObject[]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
