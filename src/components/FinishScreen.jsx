/* eslint-disable react/prop-types */
import { FaArrowRotateRight } from "react-icons/fa6";

const FinishScreen = ({ points, Totalpoints, Highscore, dispatch }) => {
  const Totalpercentage = (points / Totalpoints) * 100;
  let emojis;

  if (Totalpercentage >= 80 && Totalpercentage <= 100) {
    emojis = "🥇";
  } else if (Totalpercentage >= 60 && Totalpercentage < 80) {
    emojis = "🥈";
  } else if (Totalpercentage >= 30 && Totalpercentage < 60) {
    emojis = "🥉";
  } else if (Totalpercentage >= 0 && Totalpercentage < 30) {
    emojis = "🏅";
  } else {
    emojis = "😭";
  }

  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <p className=" text-white text-3xl font-semibold bg-blue-400 p-5 rounded-full">
        <strong>{emojis}</strong>
        You scored {points} out of {Totalpoints} that is{" "}
        {Math.ceil(Totalpercentage)}%.
      </p>
      <p className=" text-white text-3xl font-semibold bg-red-400 px-6 py-3 rounded-full mt-4">
        😎Your Best Score: {Highscore}
      </p>
      <button
        onClick={() => dispatch({ type: "Reset" })}
        className="flex justify-center items-center gap-2 font-sans  border-2 px-10 text-2xl text-white py-2 rounded-full mt-6 hover:bg-white hover:text-black transition ease-in delay-100 focus:outline-none focus:ring focus:ring-gray focus:ring-offset-1 "
      >
        Play Again <FaArrowRotateRight />
      </button>
    </div>
  );
};

export default FinishScreen;
