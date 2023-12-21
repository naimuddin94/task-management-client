import loginImage from "../../../public/2007.i039.019_cyber_security_spyware_data_protection_isometric_set-06-removebg-preview.png";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-5">
      <div>
        <img src={loginImage} alt="image by freepik" />
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-sm shadow-accent/30 bg-base-200">
        <form className="card-body">
          <h2 className="text-4xl font-bold text-center">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              type="password"
              placeholder="Enter your password here"
              className="input input-bordered"
              required
            />
          </div>
          <label className="label">
            <p className="label-text-alt ">
              Are you new to here?{" "}
              <span className="link link-hover ml-1">Register</span>
            </p>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Login</button>
          </div>
        </form>
        <div className="px-8 pb-5">
          <button className="btn btn-primary btn-block text-slate-200">
            <FaGoogle />
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
