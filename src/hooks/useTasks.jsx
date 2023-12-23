import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthInfo from "./useAuthInfo";

const useTasks = () => {
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks/${user?.email}`);
      return res.data;
    },
  });

  return { tasks, isLoading, refetch };
};

export default useTasks;
