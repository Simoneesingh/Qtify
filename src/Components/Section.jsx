import { useState } from "react";
import Carousel from "./Carousel";
import Cards from "./Cards";

export default function Section({ title, url }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mt-4 px-4">
        <h1 className="text-white font-bold text-2xl ">{title}</h1>
        <button className="text-b2 font-bold text-xl" onClick={handleToggle}>
          {toggle ? "Collapse" : "Show All"}
        </button>
      </div>
      {!toggle ? <Carousel url={url} /> : <Cards url={url} />}
    </div>
  );
}
