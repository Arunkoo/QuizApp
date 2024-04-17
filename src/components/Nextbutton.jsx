/* eslint-disable react/prop-types */
function NextButton({ dispatch, Answer, index, numQuestions }) {
  if (Answer === null) return null;

  return (
    <div className="text-center ml-[500px]">
      <button
        className="font-sans border-2 px-10 text-2xl text-white py-2 rounded-full mt-6 hover:bg-white hover:text-black transition ease-in delay-100 focus:outline-none focus:ring focus:ring-gray focus:ring-offset-1"
        onClick={() => {
          if (index === numQuestions - 1) dispatch({ type: "Finish" });
          else dispatch({ type: "nextQuestion" });
        }}
      >
        {index === numQuestions - 1 ? "Finished" : "Next"}
      </button>
    </div>
  );
}

export default NextButton;
