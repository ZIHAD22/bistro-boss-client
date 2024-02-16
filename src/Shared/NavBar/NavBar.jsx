import { Link, NavLink, useLocation } from "react-router-dom";
import { router } from "../../Routes/Routes";

const NavBar = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const navOptions = (
    <>
      <li className={`mr-3 hover:text-[#EEFF25] uppercase`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className={`mr-3 hover:text-[#EEFF25] uppercase`}>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Menu
        </NavLink>
      </li>
      <li className={`mr-3 hover:text-[#EEFF25] uppercase`}>
        <NavLink
          to="/order"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Order Food
        </NavLink>
      </li>
      <li className={`mr-3 hover:text-[#EEFF25] uppercase`}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li className={`mr-3 hover:text-[#EEFF25] uppercase`}>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          CONTACT us
        </NavLink>
      </li>
      {/* <li className={`mr-3 hover:text-[#EEFF25] uppercase`}>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          login
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div>
      <div className="navbar fixed max-w-screen-2xl z-10 bg-opacity-50  bg-black  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {isLogin ? (
            <Link to="/signup" className="btn uppercase">
              Sign Up
            </Link>
          ) : (
            <Link to="/login" className="btn uppercase">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
