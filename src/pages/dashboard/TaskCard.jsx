import PropTypes from "prop-types";

const TaskCard = ({ task }) => {
  const { _id, title, description, deadline, createdAt, priority, status } =
    task;
  return (
    <div className="card bg-[#364F6B] shadow-xl rounded mb-2">
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <p>{priority}</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
