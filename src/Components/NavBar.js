import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
            transition={{ duration: 1 }}
            className="option__side  bg-blue-500 w-full  "
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <NavLink exact to="/" activeClassName="text-white">
                Home
              </NavLink>

              <NavLink exact to="/genres" activeClassName="text-white">
                <h1>PGenres</h1>
              </NavLink>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="toggle__butto h-full w-2.5  flex items-center justify-center bg-gray-100 "
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
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
