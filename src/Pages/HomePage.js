import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { Context } from "../Components/Context";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [state, setState] = useContext(Context);

  function closeNav() {
    setState(false);
  }

  console.log(state);

  return (
    <div
      className="flex-grow flex-shrink bg-deep-purple h-screen w-screen flex justify-center pt-24 "
      onClick={closeNav}

      // onClick={closeNav}
    >
      <div className="h-1/4 w-1/2 bg-red-400">
        <div className="image  "></div>
      </div>
    </div>
  );
}
