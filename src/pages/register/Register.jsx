import { Link } from "react-router-dom";
import image from "/public/Email_Security_-_546x372.png";
import SocialLogin from "../../components/shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuthInfo from "../../hooks/useAuthInfo";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import ImageUpload from "../../lib/ImageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const axiosSecure = useAxiosSecure();
  const { createUser, setName, setPhoto, setLoading } = useAuthInfo();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, photoFile, email, password } = data;
    const photo = await ImageUpload(photoFile[0]);
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            axiosSecure
              .post("/users/create", { name, email, photo })
              .then((res) => {
                console.log(res);
                setName(name);
                setPhoto(photo);
                toast.success("Account created 🎉");
              })
              .catch((err) => {
                console.log(err.message);
              });
          })
          .catch((error) => {
            const message = error.code.replace(/auth\//, "").replace(/-/g, " ");
            toast.error(message);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch((error) => {
        const message = error.code.replace(/auth\//, "").replace(/-/g, " ");
        toast.error(message);
      });
  };

  return (
    <div>
      <div className="card shrink-0 w-full max-w-3xl mx-auto shadow-sm shadow-accent/30 bg-base-200 relative my-4">
        <img
          src={image}
          alt="secure image"
          className="absolute right-5 bottom-5 w-80 hidden md:block"
        />
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-4xl font-bold text-center">Register</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="form-control flex-[3]">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
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
                {...register("photoFile")}
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
              {...register("email")}
              type="email"
              placeholder="Enter your password here"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control max-w-sm">
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
              <Link to="/login">
                <span className="link link-hover ml-1">Login</span>
              </Link>
            </p>
          </label>
          <div className="form-control mt-4">
            <button className="btn btn-accent max-w-[20rem]">
              {isSubmitting ? (
                <span className="loading loading-spinner text-warning"></span>
              ) : (
                "Register"
              )}
            </button>
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
