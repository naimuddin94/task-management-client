import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import useAuthInfo from "../../hooks/useAuthInfo";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const axiosSecure = useAxiosSecure();
  const { googleLogin, setLoading, setName, setPhoto } = useAuthInfo();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const name = result?.user?.displayName;
        const email = result?.user?.email;
        const photo = result?.user?.photoURL;
        axiosSecure
          .post("/users/create", { name, email, photo })
          .then((res) => {
            console.log(res);
            setName(name);
            setPhoto(photo);
            toast.success(`🎉 welcome ${result?.user?.displayName}`);
          })
          .catch((err) => {
            console.log(err.message);
          });
        
      })
      .catch((error) => {
        const message = error.code.replace(/auth\//, "").replace(/-/g, " ");
        toast.error(message);
        setLoading(false);
      });
  };
  return (
    <div className="px-8 pb-5">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-primary btn-block text-slate-200"
      >
        <FaGoogle />
        Login with google
      </button>
    </div>
  );
};

export default SocialLogin;
