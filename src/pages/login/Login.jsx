import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../public/2007.i039.019_cyber_security_spyware_data_protection_isometric_set-06-removebg-preview.png";
import SocialLogin from "../../components/shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuthInfo from "../../hooks/useAuthInfo";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, loading, setLoading } = useAuthInfo();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        toast.success(`🎉 Welcome to task minder`);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const message = error.code.replace(/auth\//, "").replace(/-/g, " ");
        toast.error(message);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-5">
      <div>
        <img src={loginImage} alt="image by freepik" />
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-sm shadow-accent/30 bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h2 className="text-4xl font-bold text-center">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password here"
              className="input input-bordered"
              required
            />
          </div>
          <label className="label">
            <p className="label-text-alt ">
              Are you new to here?{" "}
              <Link to="/register">
                <span className="link link-hover ml-1">Register</span>
              </Link>
            </p>
          </label>
          <div className="form-control mt-1">
            <button className="btn btn-accent">
              {loading ? (
                <span className="loading loading-spinner text-warning"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
