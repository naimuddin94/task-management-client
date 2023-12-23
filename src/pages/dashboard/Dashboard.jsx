import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import useAuthInfo from "../../hooks/useAuthInfo";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useRef } from "react";
import useTasks from "../../hooks/useTasks";
import TaskCard from "./TaskCard";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const { tasks, isLoading, refetch } = useTasks();
  const formRef = useRef();
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const incompleteTask = tasks.filter((task) => task.status === "To-Do");
  const ongoingTask = tasks.filter((task) => task.status === "Ongoing");
  const completeTask = tasks.filter((task) => task.status === "Completed");

  const onSubmit = (data) => {
    const userEmail = user?.email;
    const { title, description, deadline, priority } = data;
    console.log(title, description, deadline, priority, userEmail);
    axiosSecure
      .post("/tasks/create", {
        title,
        description,
        deadline,
        priority,
        userEmail,
      })
      .then((res) => {
        if (res.status === 201) {
          refetch();
          toast.success("✏️ Task added successfully");
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        formRef.current.submit();
      });
  };

  const dropOver = (e) => {
    e.preventDefault();
  };

  const dragDropped = (e, status) => {
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) {
      axiosSecure
        .put(`/tasks/update/${taskId}`, { status })
        .then((res) => {
          refetch();
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center px-5 md:px-10 py-3">
          <h2 className="text-xl font-semibold border-l-8 border-accent px-4">
            All Tasks
          </h2>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-info"
          >
            <FaPlus />
            Create Task
          </button>
        </div>
        <div className="grid grid-cols-3 text-lg font-mono font-semibold text-slate-200 pb-3">
          <h3 className="text-center">Incomplete</h3>
          <h3 className="text-center">Ongoing</h3>
          <h3 className="text-center">Complete</h3>
        </div>
        <div className="h-[calc(100vh-68px)]  flex flex-col md:flex-row gap-2 px-5">
          <div
            // eslint-disable-next-line react/no-unknown-property
            droppable
            onDragOver={dropOver}
            onDrop={(e) => dragDropped(e, "To-Do")}
            className={`h-[calc(100vh-68px)] overflow-y-auto scrollbar flex-1 md:pb-28 ${styles.scrollbar_hide}`}
          >
            {incompleteTask?.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
          <div
            // eslint-disable-next-line react/no-unknown-property
            droppable
            onDragOver={dropOver}
            onDrop={(e) => dragDropped(e, "Ongoing")}
            className={`h-[calc(100vh-68px)] overflow-y-auto scrollbar flex-1 md:pb-28 ${styles.scrollbar_hide}`}
          >
            {ongoingTask?.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
          <div
            // eslint-disable-next-line react/no-unknown-property
            droppable
            onDragOver={dropOver}
            onDrop={(e) => dragDropped(e, "Completed")}
            className={`h-[calc(100vh-68px)] overflow-y-auto scrollbar flex-1 md:pb-28 ${styles.scrollbar_hide}`}
          >
            {completeTask?.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
      </div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle relative"
      >
        <div className="modal-box">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  {...register("title")}
                  type="text"
                  placeholder="Enter task title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  {...register("description")}
                  className="textarea textarea-primary"
                  rows={3}
                  placeholder="Enter description here"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    {...register("deadline")}
                    type="date"
                    placeholder="Enter task title"
                    className="input input-bordered w-fit"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Priority</span>
                  </label>
                  <select
                    {...register("priority")}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <button className="btn btn-accent w-28">
                  {isSubmitting ? (
                    <span className="loading loading-spinner text-warning"></span>
                  ) : (
                    "Add Task"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="absolute top-2 right-2">
            <form ref={formRef} method="dialog">
              <button className="btn btn-circle">❌</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Dashboard;
