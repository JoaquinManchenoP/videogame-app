import React, { useContext } from "react";
import { Context } from "../Components/Context";

export default function SearchPage() {
  const [state, setState] = useContext(Context);

  function closeNav() {
    setState(false);
  }

  return (
    <div className="bg-deep-purple h-screen w-screen" onClick={closeNav}>
      <h1>This is the SearchPage</h1>
    </div>
  );
}
