/* eslint-disable react/prop-types */
const Options = ({ questions, dispatch, Answer, points }) => {
  let hasAnswer = Answer !== null;
  return (
    <div className="flex flex-col w-[90vh] ">
      {questions.options.map((option, index) => (
        <button
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`Option ${index === Answer ? " translate-x-10" : ""} ${
            hasAnswer
              ? index === questions.correctOption
                ? "bg-blue-900 hover:bg-blue-900"
                : "bg-orange-900 hover:bg-orange-900"
              : ""
          } `}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
