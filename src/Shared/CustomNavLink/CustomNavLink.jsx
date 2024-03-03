import { NavLink, useLocation } from "react-router-dom";

const CustomNavLink = ({ to, name, children }) => {
  const location = useLocation();
  const isDashBoard = location.pathname.includes("dashboard");
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${isDashBoard ? "text-white" : "text-[#EEFF25]"}` : ""
      }
    >
      {name ? name : children}
    </NavLink>
  );
};

export default CustomNavLink;
