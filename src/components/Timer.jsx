/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Timer = ({ dispatch, secondRemaning }) => {
  const min = Math.floor(secondRemaning / 60);
  const seconds = secondRemaning % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "Timer" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <button className="font-sans  border-2 px-10 text-2xl text-white py-2 rounded-full mt-6  ">
      {min < 10 && "0"}
      {min} : {seconds < 10 && "0"}
      {seconds}
    </button>
  );
};

export default Timer;
