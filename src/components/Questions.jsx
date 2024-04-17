import Options from "./Options";

/* eslint-disable react/prop-types */
const Questions = ({ questions, dispatch, Answer, points }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="text-3xl font-sans font-semibold text-white">
        {questions.question}
      </h2>
      <Options
        questions={questions}
        dispatch={dispatch}
        Answer={Answer}
        points={points}
      />
    </div>
  );
};

export default Questions;
