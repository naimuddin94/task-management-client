import DashboardLink from "../../components/utility/DashboardLink";
import useAuthInfo from "../../hooks/useAuthInfo";
import userDemoPhoto from "/public/user.webp";

const Sidebar = () => {
  const { name, photo } = useAuthInfo();
  return (
    <div className="col-span-2 bg-accent h-[calc(100vh-68px)]">
      <ul className="flex flex-col justify-between h-full gap-2 p-5">
        <div className="flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={photo ? photo : userDemoPhoto} alt="user photo" />
            </div>
          </div>
          <h1 className="text-gray-700 font-semibold">{name}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <DashboardLink path="/dashboard" label="All Tasks" />
          <DashboardLink path="/dashboard/ongoingTasks" label="Ongoing Tasks" />
          <DashboardLink
            path="/dashboard/completeTasks"
            label="Complete Tasks"
          />
        </div>
        <div className="flex flex-col">
          <DashboardLink path="/dashboard/profile" label="Profile" />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
