import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const Dashboard = () => {
  const handleTask = () => {
    toast.success("dashboard task");
  };
  return (
    <div>
      <div className="flex justify-between items-center px-5 md:px-10 py-3">
        <h2 className="text-xl font-semibold border-l-8 border-accent px-4">
          All Tasks
        </h2>
        <button onClick={handleTask} className="btn btn-info">
          Create Task <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
