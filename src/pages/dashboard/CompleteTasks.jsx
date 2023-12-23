import useTasks from "../../hooks/useTasks";
import TaskCard from "./TaskCard";
import styles from "./dashboard.module.css";

const CompleteTasks = () => {
  const { tasks } = useTasks();

  const completeTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <div className="md:p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
      <div
        className={`h-[calc(100vh-68px)] overflow-y-auto md:pb-28 ${styles.scrollbar_hide}`}
      >
        {completeTasks?.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompleteTasks;
