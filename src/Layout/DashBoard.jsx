import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaCalendarAlt, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hocks/useCart";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side  bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  bg-[#D1A054] text-base-content">
          {
            isAdmin ? <>
              <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home </NavLink></li>
              <li><NavLink to="/dashboard/reservations"><FaUtensils></FaUtensils> Add Items</NavLink></li>
              <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Items</NavLink></li>
              <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
              <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users </NavLink></li>
              
            </> : <>
              <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home </NavLink></li>
              <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
              <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
              <li >
                <NavLink to="/dashboard/mycart"><FaShoppingCart>
                </FaShoppingCart> My Cart
                  <span className="badge inline badge-secondary">+{cart?.length || 0}</span>
                </NavLink>
              </li>
            </>
          }

          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome> Home </NavLink></li>
          <li><NavLink to="/menu"><FaHome></FaHome> Our Menu </NavLink></li>
          <li><NavLink to="/order/salad"><FaHome></FaHome> Our Shop </NavLink></li>
          <li><NavLink><FaHome></FaHome> User Home </NavLink></li>

        </ul>

      </div>
    </div>
  );
};

export default DashBoard;