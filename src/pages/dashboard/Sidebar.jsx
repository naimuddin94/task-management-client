import DashboardLink from "../../components/utility/DashboardLink";
import useAuthInfo from "../../hooks/useAuthInfo";
import userDemoPhoto from "/public/user.webp";
import { FaRunning } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { GiStabbedNote } from "react-icons/gi";


const Sidebar = () => {
  const { name, photo } = useAuthInfo();
  return (
    <div className="col-span-2 bg-accent md:h-[calc(100vh-68px)]">
      <ul className="flex md:flex-col justify-between h-full gap-2 p-5">
        <div className="hidden md:flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={photo ? photo : userDemoPhoto} alt="user photo" />
            </div>
          </div>
          <h1 className="text-gray-700 font-semibold">{name}</h1>
        </div>
        <div className="flex md:flex-col gap-2">
          <DashboardLink
            path="/dashboard"
            label="All Tasks"
            icon={GiStabbedNote}
          />
          <DashboardLink
            path="/dashboard/incompleteTasks"
            label="Incomplete"
            icon={MdOutlineIncompleteCircle}
          />
          <DashboardLink
            path="/dashboard/ongoingTasks"
            label="Ongoing Tasks"
            icon={FaRunning}
          />
          <DashboardLink
            path="/dashboard/completeTasks"
            label="Complete Tasks"
            icon={IoShieldCheckmarkSharp}
          />
        </div>
        <div className="flex flex-col">
          <DashboardLink
            path="/dashboard/profile"
            label="Profile"
            icon={CiSettings}
          />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
