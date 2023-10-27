import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../Authentication/Provider";
import Theme from "../../Theme/Theme";

const Navbar = () => {
  const { user, logOut , cartNum } = useContext(AuthProvider);
  const { displayName, photoURL, email } = user || {};

  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-warning dark:decoration-warning"
              : ""
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addProduct"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-[#FBB403] dark:decoration-[#FBB403]"
              : ""
          }
        >
          ADD PRODUCT
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/cart"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-3 decoration-4 decoration-warning dark:decoration-[#FBB403]"
              : "indicator"
          }
        >
          MY CART
           <span className="badge badge-sm indicator-item">{cartNum}</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 text-xl"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"}>
            <img className="h-20" src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-xl">{navLink}</ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="mt-2">
            <Theme></Theme>
          </div>
          {!user ? (
            <div className="flex gap-4">
              <Link
                to={"/Login"}
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#FBB403] transition duration-300 ease-out border-2 border-[#FBB403]  shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FBB403] group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-[#FBB403] transition-all duration-300 transform group-hover:translate-x-full ease">
                  LOG IN
                </span>
                <span className="relative invisible">LOG IN</span>
              </Link>
              <Link
                to="/signUp"
                className="hidden md:block relative rounded px-5 py-2.5 overflow-hidden group bg-[#FBB403] hover:bg-gradient-to-r hover:from-[#FBB403] hover:to-yellow-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-600 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Sign Up</span>
              </Link>
            </div>
          ) : (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={photoURL ? `${photoURL}` : "/profile.png"} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box space-y-3 "
                >
                  <li className="text-center">
                    <div className="text-center justify-between w-full text-xl">
                      {displayName}
                    </div>
                  </li>
                  <li className="text-center">
                    <div className="text-center w-full text-xl">{email}</div>
                  </li>
                  <li>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={logOut}
                        className="px-2 py-2 relative rounded group text-white font-medium inline-block whitespace-nowrap w-24"
                      >
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#24D2EE] to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#24D2EE] to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#FBB403] to-yellow-400"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#FBB403] from-yellow-300"></span>
                        <span className="relative">LOG OUT</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
