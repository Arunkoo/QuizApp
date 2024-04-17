import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Reducer from "./Reducer";
import Loader from "./components/Loader";
import Error from "./components/Error";
import ReadyStatus from "./components/readyStatus";
import Questions from "./components/Questions";
import Nextbutton from "./components/Nextbutton";
import Progressbar from "./components/Progressbar";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/footer";

function App() {
  // Initial state...
  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    Answer: null,
    Highscore: 0,
    points: 0,

    secondRemaning: null,
  };
  // Defining state using reducer ...
  const [state, dispatch] = useReducer(Reducer, initialState);
  const {
    questions,
    status,
    index,
    Answer,
    Highscore,
    points,

    secondRemaning,
  } = state;
  // fetching a fake API on load
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/questions")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((err) => dispatch({ type: "dataFailed", err }));
    }, 1000);
  }, []);
  // other logics ....
  const numQuestions = questions.length;
  const myfunc = (total, num) => {
    return total + num;
  };
  let Totalpoints = questions.map((items) => items.points).reduce(myfunc, 0);

  return (
    <div className="bg-slate-900 h-[100vh]">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "Error Encounterd" && <Error />}
        {status === "ready" && (
          <ReadyStatus dispatch={dispatch} numQuestions={numQuestions} />
        )}
        {status === "Active" && (
          <>
            <Progressbar
              numQuestions={numQuestions}
              index={index}
              points={points}
              Totalpoints={Totalpoints}
              Answer={Answer}
            />
            <Questions
              questions={questions[index]}
              dispatch={dispatch}
              Answer={Answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondRemaning={secondRemaning} />
              <Nextbutton
                dispatch={dispatch}
                Answer={Answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "Finished" && (
          <FinishScreen
            points={points}
            Totalpoints={Totalpoints}
            Highscore={Highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
