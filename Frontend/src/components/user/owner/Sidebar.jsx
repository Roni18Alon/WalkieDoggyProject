import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../../contexts/ContextProvider";
import { FaDog, FaPlusCircle, FaRegUserCircle, FaSearch } from "react-icons/fa";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-0 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <FaDog /> <span>Dog Owner</span>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="block p-3 mt-4 text-xl rounded-full hover:bg-light-gray md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-4 ">
            <div>
              <p className="m-3 mt-4 text-gray-400 uppercase dark:text-gray-400">
                DASHBOARD
              </p>
              <NavLink
                to={`/Profile`}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {/* Icon */}
                <FaRegUserCircle className="text-xl" />

                <span className="text-lg capitalize">Profile</span>
              </NavLink>
              <NavLink
                to={`/AddDog`}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {/* Icon */}
                <FaPlusCircle className="text-xl" />

                <span className="capitalize ">Add Dog</span>
              </NavLink>
              <NavLink
                to={`/MyDogs`}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {/* Icon */}
                <FaDog className="text-xl" />

                <span className="capitalize ">My Dogs</span>
              </NavLink>
              <NavLink
                to={`/DogWalkersList`}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {/* Icon */}
                <FaSearch className="text-xl" />

                <span className="capitalize ">Find Dog Walkers</span>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
