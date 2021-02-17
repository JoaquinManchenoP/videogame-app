import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { MdGamepad } from "react-icons/md";

export default function NavBar() {
  let [toggle, setToggle] = useState(true);
  let [showMenu, setShowMenu] = useState(true);

  function handleToggle() {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    console.log(toggle);
  }

  return (
    <div className="navbar h-screen w-52 flex">
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.6 }}
            className="option__side bg-light-purple w-full  "
          >
            <motion.div
              className="flex flex-col justify-center mt-20 items-start ml-10 space-y-3 text-deep-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <div className="main__icon text-4xl mb-8">
                <MdGamepad />
              </div>

              <NavLink
                className="flex space-x-3"
                exact
                to="/"
                activeClassName="text-white  "
              >
                <div className="icon pt-1  ">
                  <AiFillHome />
                </div>
                <dic className="text ">
                  <h1>Home</h1>
                </dic>
              </NavLink>

              <NavLink
                className="flex space-x-3"
                exact
                to="/genres"
                activeClassName="text-white"
              >
                <div className="icon pt-1">
                  <CgGames />
                </div>
                <div className="text">
                  <h1> Genres</h1>
                </div>
              </NavLink>
              <NavLink
                className="flex space-x-3"
                exact
                to="/search"
                activeClassName="text-white"
              >
                <div className="icon">
                  <FiSearch />
                </div>
                <div className="text">
                  <h1> Search</h1>
                </div>
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="toggle__button h-full w-2.5  flex items-center justify-center bg-purple-200 "
        initial={{ opacity: 0 }}
        aanimate={{ opacity: 1 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="toggle h-20 w-full rounded-full bg-gray-400 "
          onClick={handleToggle}
        ></div>
      </motion.div>
    </div>
  );

  {
    /* <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              exit={{ width: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <div>
                <div className="h-screen w-44flex bg-blue-600">
                  <motion.div
                    className="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <p>Menu</p>

                    <p>Trending</p>
                    <p>Genres</p>
                    <p>Search</p>
                  </motion.div>
                </div>
                <h1></h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        onClick={handleToggle}
        className="navbar w-2 h-screen flex items-center justify-center bg-blue-300 opacity-50"
      >
        <div className="toggle_button h-6 w-full rounded-full bg-blue-800 "></div>
      </div> */
  }
}
