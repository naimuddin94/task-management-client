import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
      <div className="col-span-2 bg-accent min-h-[calc(100vh-68px)]">
        <ul>
          <NavLink to="/allTasks">
            <li>All Tasks</li>
          </NavLink>
          <NavLink to="/ongoingTasks">
            <li>Ongoing Tasks</li>
          </NavLink>
          <NavLink to="completeTasks">
            <li>Complete Tasks</li>
          </NavLink>
          <NavLink to="/profile">
            <li>Profile</li>
          </NavLink>
        </ul>
      </div>
    );
};

export default Sidebar;