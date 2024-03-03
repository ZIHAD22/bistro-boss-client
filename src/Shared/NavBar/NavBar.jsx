import { MdShoppingCart } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { StoreContext } from "../../provider/StoreProvider";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

const NavBar = () => {
  const navigator = useNavigate();
  const { user, logOutUser } = useContext(AuthContext);
  const {
    store: { carts },
  } = useContext(StoreContext);
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const handleLogOut = () => {
    const result = logOutUser();
    if (result) {
      navigator("/");
    }
  };

  const navOptions = (
    <>
      <li className="mr-3 hover:text-[#EEFF25] uppercase">
        <CustomNavLink to="/">Home</CustomNavLink>
      </li>
      <li className="mr-3 hover:text-[#EEFF25] uppercase">
        <CustomNavLink to="/menu">Menu</CustomNavLink>
      </li>
      <li className="mr-3 hover:text-[#EEFF25] uppercase">
        <CustomNavLink to="/order">Order Food</CustomNavLink>
      </li>
      <li className="mr-3 hover:text-[#EEFF25] uppercase">
        <CustomNavLink to="/dashboard">DASHBOARD</CustomNavLink>
      </li>
      <li className="mr-3 hover:text-[#EEFF25] uppercase">
        <CustomNavLink to="/contact">CONTACT us</CustomNavLink>
      </li>
      <CustomNavLink to="dashboard/cart">
        <li className="border border-gray-400 py-2 px-1 rounded-lg flex justify-center items-center cursor-pointer">
          <span>
            <MdShoppingCart size="25px" />
          </span>
          <div className="badge">{carts?.length}</div>
        </li>
      </CustomNavLink>
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
          <ul className="menu-horizontal px-1 items-center">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <span onClick={handleLogOut} className="btn uppercase">
              Log Out
            </span>
          ) : isLogin ? (
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
