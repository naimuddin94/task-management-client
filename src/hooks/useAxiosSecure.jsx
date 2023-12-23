import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://task-management-server-smoky-six.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
