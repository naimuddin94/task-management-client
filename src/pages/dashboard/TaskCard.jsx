import PropTypes from "prop-types";
import moment from "moment";

const TaskCard = ({ task }) => {
  const { _id, title, description, deadline, createdAt, priority, status } =
    task;

  const dragStarted = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };
  return (
    <div
      draggable
      onDragStart={(e) => dragStarted(e, _id)}
      className="card bg-[#364F6B] shadow-xl rounded mb-2"
    >
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <h4>{priority}</h4>
          <h4 className="bg-[#FC5185] text-gray-800 px-2 py-[2px] rounded w-fit">
            {status}
          </h4>
          <h4>{moment(deadline).subtract(10, "days").calendar()}</h4>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
