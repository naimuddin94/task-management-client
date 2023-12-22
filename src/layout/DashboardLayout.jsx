import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <Sidebar/>
        <div className="grid-cols-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
