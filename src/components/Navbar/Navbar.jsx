import React from "react";
import Logo from "../../assets/red-tie.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Wedding",
    link: "/#",
  },
  {
    id: 4,
    name: "Tailor Made",
    link: "/#",
  },
  {
    id: 5,
    name: "Tuxedo",
    link: "/#",
  },
];

const DropdownLinks = [
  { id: 1, name: "Trending Suits", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div
      data-aos="zoom-in"
      className="shadow-md  dark:bg-gray-400 dark:text-black duration-200 relative z-40  "
    >
      <div>
        {/* upper navbar  */}
        <div className=" text-[#0a1424] py-3  ">
          <div className="container flex justify-between items-end">
            <div>
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex items-end gap-2"
              >
                <img src={Logo} alt="Logo Suiting." className="w-12 mx-2" />{" "}
                Suiting
              </a>
            </div>
            {/* search bar */}
            <div className="flex justify-between items-center gap-4 ">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary  "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 " />
              </div>{" "}
              {/* order button*/}
              <button
                onClick={() => handleOrderPopup()}
                className="bg-[#0a1424]  transition-all duration duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>{" "}
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>

        {/* lower navbar  */}
        <div className="flex justify-center dark:bg-white bg-gray-200 shadow-sm shadow-gray-200">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 font-bold  hover:text-red-700 hover:font-bold duration-200"
                >
                  {" "}
                  {data.name}{" "}
                </a>
              </li>
            ))}
            <li className="group relative cursor-pointer">
              <a
                href="#"
                className="flex items-center gap-[2px ] py-2 font-bold hover:text-red-700 hover:font-bold"
              >
                Trending{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md dark:bg-primary dark:text-white dark:hover:bg-white dark:hover:text-primary bg-white p-2 text-primary ">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary hover:text-white"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
