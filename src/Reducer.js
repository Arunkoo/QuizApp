// Reducer function
const reducer = (
  state = {
    questions: [],
    status: "loading",
    Answer: null,
    points: 0,
    Highscore: 0,
    index: 0,

    secondRemaning: null,
  },
  action
) => {
  const currQuestion = state.questions.at(state.index);
  const Sec_per_question = 20;
  // console.log(currQuestion);
  // console.log(state, action);
  // switch case....
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "Error Encounterd" };
    case "start":
      return {
        ...state,
        status: "Active",
        secondRemaning: state.questions.length * Sec_per_question,
      };
    case "newAnswer":
      // .at() method used to retrive the specific thing form the particular property of the object.

      return {
        ...state,
        Answer: action.payload,
        points:
          action.payload === currQuestion.correctOption
            ? state.points + currQuestion.points
            : state.points - 4,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, Answer: null };
    case "Finish":
      return {
        ...state,
        status: "Finished",
        Highscore:
          state.points > state.Highscore ? state.points : state.Highscore,
      };
    case "Reset":
      return {
        ...state,

        index: 0,
        Answer: null,
        points: 0,
        secondRemaning: null,
        status: "Active",
      };
    case "Timer":
      return {
        ...state,
        secondRemaning: state.secondRemaning - 1,
        status:
          state.secondRemaning === 0
            ? (state.status = "Finished")
            : state.status,
      };
    default:
      throw new Error("Unkown action type detected");
  }
};

export default reducer;
