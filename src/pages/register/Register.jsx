import { Link } from "react-router-dom";
import image from "/public/Email_Security_-_546x372.png";
import SocialLogin from "../../components/shared/SocialLogin";

const Register = () => {
  return (
    <div>
      <div className="card shrink-0 w-full max-w-3xl mx-auto shadow-sm shadow-accent/30 bg-base-200 relative my-4">
        <img
          src={image}
          alt="secure image"
          className="absolute right-5 bottom-5 w-80 hidden md:block"
        />
        <form className="card-body ">
          <h2 className="text-4xl font-bold text-center">Register</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="form-control flex-[3]">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-[2]">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-accent w-full max-w-xs"
              />
            </div>
          </div>
          <div className="form-control max-w-lg">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your password here"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control max-w-sm">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your password here"
              className="input input-bordered"
              required
            />
          </div>
          <label className="label">
            <p className="label-text-alt ">
              Are you new to here?{" "}
              <Link to="/login">
                <span className="link link-hover ml-1">Login</span>
              </Link>
            </p>
          </label>
          <div className="form-control mt-4">
            <button className="btn btn-accent max-w-[20rem]">Register</button>
          </div>
        </form>
        <div className="max-w-[20rem]">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
