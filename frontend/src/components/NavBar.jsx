import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            ECommercePlatform
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 mx-2" : "text-white mx-2"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 mx-2" : "text-white mx-2"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/order-summary"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 mx-2" : "text-white mx-2"
            }
          >
            Order Summary
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 mx-2" : "text-white mx-2"
            }
          >
            Admin
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
