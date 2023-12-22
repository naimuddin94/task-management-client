import { NavLink, useNavigate } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";

const NavItems = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuthInfo();

  const handleLogout = () => {
    logoutUser().then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/notifications">Notifications</NavLink>
      </li>
      {user ? (
        <button onClick={handleLogout} className="btn btn-sm btn-accent">
          Logout
        </button>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
};

export default NavItems;
