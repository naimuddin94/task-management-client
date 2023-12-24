import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const DashboardLink = ({ path, label, icon: Icon }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={`py-2 rounded text-center font-medium flex items-center gap-2 justify-center ${
        path === pathname
          ? "bg-[#FC5185] text-gray-800"
          : "hover:bg-gray-700 bg-gray-800"
      }`}
    >
      {Icon && <Icon size={20} />}
      {label}
    </Link>
  );
};

DashboardLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default DashboardLink;
