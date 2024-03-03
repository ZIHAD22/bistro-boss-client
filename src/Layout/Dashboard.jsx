import { Outlet } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { MdReviews, MdWorkHistory } from "react-icons/md";
import CustomNavLink from "../Shared/CustomNavLink/CustomNavLink";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open max-w-screen-2xl mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start">
        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
          <HiOutlineBars3 />
        </label>
        <div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-4 w-64 min-h-full text-base-content bg-[#D1A054]">
          <CustomNavLink to="/">
            <div className="mb-3 p-4">
              <h1 className="font-bold text-xl">BISTRO BOSS</h1>
              <h1 className="font-bold text-base tracking-[5px]">Restaurant</h1>
            </div>
          </CustomNavLink>
          {/* Sidebar content here */}
          <li className="font-semibold">
            <CustomNavLink to="user-home">
              <div className="flex items-center py-2 ml-2">
                <IoHome size="25px" />
                <span className="uppercase pl-2">User Home</span>
              </div>
            </CustomNavLink>
          </li>
          <li className="font-semibold">
            <CustomNavLink to="reservation">
              <div className="flex items-center py-2 ml-2">
                <FaCalendarAlt size="25px" />
                <span className="uppercase pl-2">reservation</span>
              </div>
            </CustomNavLink>
          </li>
          <li className="font-semibold">
            <CustomNavLink to="payment-history">
              <div className="flex items-center py-2 ml-2">
                <MdWorkHistory size="25px" />
                <span className="uppercase pl-2">payment history</span>
              </div>
            </CustomNavLink>
          </li>
          <li className="font-semibold">
            <CustomNavLink to="cart">
              <div className="flex items-center py-2 ml-2">
                <FaShoppingCart size="25px" />
                <span className="uppercase pl-2">my cart</span>
              </div>
            </CustomNavLink>
          </li>
          <li className="font-semibold">
            <CustomNavLink to="review">
              <div className="flex items-center py-2 ml-2">
                <MdReviews size="25px" />
                <span className="uppercase pl-2">add review</span>
              </div>
            </CustomNavLink>
          </li>
          <li className="font-semibold">
            <CustomNavLink to="booking">
              <div className="flex items-center py-2 ml-2">
                <FaCalendarCheck size="25px" />
                <span className="uppercase pl-2">my booking</span>
              </div>
            </CustomNavLink>
          </li>

          {/* divider */}
          <div className="divider divider-neutral"></div>

          <li className="font-semibold">
            <CustomNavLink to="/">
              <div className="flex items-center py-2 ml-2">
                <FaHome size="25px" />
                <span className="uppercase pl-2">Home</span>
              </div>
            </CustomNavLink>
          </li>
          <li className="font-semibold">
            <CustomNavLink to="/order">
              <div className="flex items-center py-2 ml-2">
                <FaShoppingCart size="25px" />
                <span className="uppercase pl-2">shop</span>
              </div>
            </CustomNavLink>
          </li>
          <li className="font-semibold">
            <CustomNavLink to="/contact">
              <div className="flex items-center py-2 ml-2">
                <FaHome size="25px" />
                <span className="uppercase pl-2">Contact</span>
              </div>
            </CustomNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
