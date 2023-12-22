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
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/ongoingTasks",
            element: (
              <PrivateRoute>
                <OngoingTasks />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/completeTasks",
            element: (
              <PrivateRoute>
                <CompleteTasks />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/profile",
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
