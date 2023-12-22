import DashboardLink from "../../components/utility/DashboardLink";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-accent min-h-[calc(100vh-68px)]">
      <ul className="flex flex-col justify-between h-full gap-2 p-5">
        <div className="flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 className="text-gray-700 font-semibold">Abdul Kalam</h1>
        </div>
        <div className="flex flex-col gap-2">
          <DashboardLink path="/allTasks" label="All Tasks" />
          <DashboardLink path="/ongoingTasks" label="Ongoing Tasks" />
          <DashboardLink path="/completeTasks" label="Complete Tasks" />
        </div>
        <div className="flex flex-col">
          <DashboardLink path="/profile" label="Profile" />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
