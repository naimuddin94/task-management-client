import useTasks from "../../hooks/useTasks";
import TaskCard from "./TaskCard";
import styles from "./dashboard.module.css";

const IncompleteTasks = () => {
  const { tasks, refetch } = useTasks();

  const incompleteTasks = tasks.filter((task) => task.status === "To-Do");

  return (
    <div className="md:p-3">
      <div
        className={`h-[calc(100vh-68px)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto md:pb-28 ${styles.scrollbar_hide}`}
      >
        {incompleteTasks?.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default IncompleteTasks;
