/* eslint-disable react/prop-types */
const ReadyStatus = ({ dispatch, numQuestions }) => {
  return (
    <div className="flex  flex-col justify-center items-center mt-28">
      <h1 className="text-4xl text-white font-semibold font-sans">
        Welcome To The React Quiz
      </h1>
      <p className="text-xl font-sans text-white mt-3 font-semibold">
        {numQuestions} Question To Test Your React Mastery
      </p>
      <p className="text-base font-sans text-black mt-10 font-semibold border-2 border-yellow-800 p-3 rounded-full bg-yellow-200 shadow-2xl shadow-yellow-800">
        ✅<strong>Instruction: </strong>Finish this quiz in
        <strong> 5 min</strong> and for each wrong answer <strong>-4</strong>{" "}
        points will be deducted.
      </p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="font-sans  border-2 px-10 text-2xl text-white py-2 rounded-full mt-6 hover:bg-white hover:text-black transition ease-in delay-100 focus:outline-none focus:ring focus:ring-gray focus:ring-offset-1 "
      >
        Start
      </button>
    </div>
  );
};

export default ReadyStatus;
