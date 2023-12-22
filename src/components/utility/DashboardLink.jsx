import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const DashboardLink = ({ path, label }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Link
      to={path}
      className={`py-2 rounded text-center font-medium ${
        path === pathname
          ? "bg-rose-500 text-gray-800"
          : "hover:bg-gray-700 bg-gray-800"
      }`}
    >
      {label}
    </Link>
  );
};

DashboardLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default DashboardLink;
