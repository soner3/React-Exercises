import Header from "./Components/Header";
import Main from "./Components/Main";
import { QuizContextProvider } from "./contexts/QuizContext";

function App() {
  return (
    <div className="app">
      <Header />
      <QuizContextProvider>
        <Main />
      </QuizContextProvider>
    </div>
  );
}

export default App;
