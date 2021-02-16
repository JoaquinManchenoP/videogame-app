import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./Menu";

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
    <>
      <div className="navbar">
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="h-screen w-44flex bg-blue-600">
                  <motion.div
                    className="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    <p>Menu</p>
                    <p>Trending</p>
                    <p>Genres</p>
                    <p>Search</p>
                  </motion.div>
                </div>
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
      </div>
    </>
  );
}
