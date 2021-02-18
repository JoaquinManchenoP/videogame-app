import React, { useContext } from "react";
import { Context } from "../Components/Context";
import { motion } from "framer-motion";

export default function GenresPage() {
  const [state, setState] = useContext(Context);

  function closeNav() {
    setState(false);
  }

  return (
    <motion.div className="h-screen w-screen bg-deep-purple" onClick={closeNav}>
      <h1>Genres page</h1>
    </motion.div>
  );
}
