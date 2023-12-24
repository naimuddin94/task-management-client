import PropTypes from "prop-types";
import moment from "moment";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const TaskCard = ({ task, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, title, description, deadline, createdAt, priority, status } =
    task;

  const dragStarted = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDelete = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tasks/${taskId}`).then((res) => {
          if (res.status === 200) {
            refetch();
            toast.warning("Task deleted successfully");
          }
        });
      }
    });
  };
  return (
    <div
      draggable
      onDragStart={(e) => dragStarted(e, _id)}
      className="card bg-[#364F6B]/25 border border-accent/25 rounded mb-2"
    >
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <hr className="opacity-5" />
        <p>{description}</p>
        <h4>{moment(deadline).subtract(10, "days").calendar()}</h4>
        <div className="flex justify-between">
          <h4>{priority}</h4>
          <div className="flex items-center gap-2">
            <h4
              className={`px-3 py-[2px] font-medium rounded-full w-fit ${
                status === "Completed"
                  ? "bg-emerald-500/50"
                  : status === "Ongoing"
                  ? "bg-yellow-500/50"
                  : "bg-gray-700/50"
              }`}
            >
              {status}
            </h4>
            <MdDeleteSweep
              onClick={() => handleDelete(_id)}
              size={25}
              className="cursor-pointer text-[#FC5185]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default TaskCard;
