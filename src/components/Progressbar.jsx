/* eslint-disable react/prop-types */
const Progressbar = ({ index, numQuestions, points, Totalpoints, Answer }) => {
  return (
    <header className="flex flex-col justify-center items-center mt-3 w-[100vh] ml-[25%]">
      <progress
        className="bg-blue-500 w-[95vh]"
        max={numQuestions}
        value={index + Number(Answer !== null)}
      />
      <div className="flex gap-[430px] ">
        <p className="text-md font-sans  mt-2 text-white">
          Questions <strong>{index + 1}</strong>/{numQuestions}
        </p>
        <p className="text-md font-sans  mt-2 text-white">
          Points <strong>{points}/</strong>/{Totalpoints}
        </p>
      </div>
    </header>
  );
};

export default Progressbar;
