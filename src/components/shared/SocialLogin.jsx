import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="px-8 pb-5">
      <button className="btn btn-primary btn-block text-slate-200">
        <FaGoogle />
        Login with google
      </button>
    </div>
  );
};

export default SocialLogin;
