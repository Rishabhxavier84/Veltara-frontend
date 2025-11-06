import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-5 px-14 bg-[#fae1b7] text-[#3a2623]">
        <Link to="/">
          <div className=" headingFont font-bold text-3xl">
            <h1>Veltara</h1>
          </div>
        </Link>

        <div>
          <ul className="flex justify-between gap-9">
            <Link to="/">
              <li className="font-semibold cursor-pointer hover:text-[#876f65] transition delay-70 ease-in-out">
                Home
              </li>
            </Link>

            <li className="font-semibold cursor-pointer hover:text-[#876f65] transition delay-70 ease-in-out">
              Bookings
            </li>

            <li className="font-semibold cursor-pointer hover:text-[#876f65] transition delay-70 ease-in-out">
              Rooms
            </li>
            <li className="font-semibold cursor-pointer hover:text-[#876f65] transition delay-70 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
