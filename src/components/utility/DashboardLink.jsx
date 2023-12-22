import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const DashboardLink = ({ path, label }) => {
  return (
    <NavLink to={path} className={({ isActive }) => (isActive ? "bg-rose-600" : "bg-gray-800 py-2 rounded text-center font-medium hover:bg-gray-700")}>
      {label}
    </NavLink>
  );
};

DashboardLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default DashboardLink;
