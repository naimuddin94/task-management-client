import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import OngoingTasks from "../pages/dashboard/OngoingTasks";
import CompleteTasks from "../pages/dashboard/CompleteTasks";
import Profile from "../pages/dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/ongoingTasks",
            element: <OngoingTasks />,
          },
          {
            path: "/dashboard/completeTasks",
            element: <CompleteTasks />,
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
