import { Link, NavLink } from "react-router-dom";
import LiveSearch from "./LiveSearch";

const Header = () => {
  let menus = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collection" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header id="header">
      <div className="flex flex-row flex-wrap justify-center items-center bg-[#EDF2EE] text-[#2B572E] font-normal text-xs sm:text-sm leading-4 gap-2  py-[12px] ">
        Free Coupon Code: Use
        <span className="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#00B307] relative inline-block font-semibold">
          <span className="relative text-white">NEW 26 </span>
        </span>
        for a Sale on Selected Items.
        <Link to="#" className="underline text-[#00B307] font-semibold">
          SHOP NOW
        </Link>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0 flex flex-wrap md:flex-nowrap items-center md:justify-between gap-y-6 py-[24px]">
        <Link
          className="order-1 md:order-1 w-[40%] md:w-auto md:mr-[20px] lg:mr-[0px]"
          to="/"
        >
          <img className="" src="img/header/logo.svg" alt="logo" />
        </Link>
        {/* Live Search  */}
        <LiveSearch />
        <div className="flex order-2 ml-auto md:ml-0 md:order-3 gap-x-3 md:gap-x-5">
          <Link to="#" className="flex mr-[-25px]">
            <span className="p-2 bg-[#00B307] w-5 h-5 rounded-full inline-flex items-center justify-center ml-1 text-xs font-bold text-white left-[40px] relative">
              99
            </span>
            <img src="img/header/heart.svg" alt="heart" />
          </Link>
          <Link className="flex" to="/cart">
            <span className="p-2 bg-[#00B307] w-5 h-5 rounded-full inline-flex items-center justify-center ml-1 text-xs font-bold text-white left-[35px] relative">
              25
            </span>
            <img src="img/header/bag.svg" alt="bag" />
          </Link>
          {/* <Link className="space-y-2" to="/cart">
            <p className="not-italic font-normal text-sm leading-[13px] text-[#4D4D4D]">
              Cart :
            </p>
            <p className="not-italic font-medium text-sm leading-[100%] text-[#1A1A1A]">
              $570.00
            </p>x
          </Link> */}
          <Link className="relative group">
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full"
                src="img/header/avatar.svg"
                alt=""
              />
              <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div className="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 right-0 group-hover:block">
              <ul
                aria-labelledby="dropdownDefaultButton"
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
              >
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0 flex items-center justify-between gap-x-10 border-t py-[10px]">
        <ul className="flex gap-x-5 md:gap-x-8">
          {menus.map((menu, index) => {
            return (
              <li key={index}>
                <NavLink
                  className="not-italic font-medium text-sm text-[#666666] hover:text-[#00B307]"
                  to={menu?.path}
                >
                  {menu?.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Link to="#" className="flex gap-x-1 items-center space-x-1">
          <img
            src="img/header/phone.svg"
            className="w-[32px] h-[32px] md:mt-2"
            alt="Phone call"
          />
          <div>
            <span className="hidden md:block not-italic font-medium text-xl leading-[30px] text-[#1A1A1A]">
              (219) 555-0114
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
