import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="md:grid grid-cols-12">
        <Sidebar />
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
