import useTasks from "../../hooks/useTasks";
import TaskCard from "./TaskCard";
import styles from "./dashboard.module.css";

const OngoingTasks = () => {
  const { tasks, refetch } = useTasks();

  const ongoingTask = tasks.filter((task) => task.status === "Ongoing");

  return (
    <div className="md:p-3">
      <div
        className={`h-[calc(100vh-68px)] overflow-y-auto md:pb-28  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${styles.scrollbar_hide}`}
      >
        {ongoingTask?.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default OngoingTasks;
