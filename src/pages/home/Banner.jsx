import { GiNotebook } from "react-icons/gi";

import bannerImage from "/public/4912351-removebg-preview.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between md:px-16">
      <div className="flex-1">
        <GiNotebook className="text-5xl text-yellow-100" />
        <h1 className="text-5xl font-black py-3">
          Your Personal <br /> Task Assistant
        </h1>
        <p className="max-w-md">
          TaskMinder keeps your tasks on track. Organize, set reminders, and
          tackle tasks efficiently with our personalized tool.
        </p>
        <Link to="/dashboard">
          <button className="btn btn-accent mt-4">Let’s Explore</button>
        </Link>
      </div>
      <div className="flex-1">
        <img src={bannerImage} alt="image by free pic" />
      </div>
    </div>
  );
};

export default Banner;
