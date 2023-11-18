import { useState } from "react";
import Operation from "./components/operation";
import Result from "./components/result";

const App = () => {
  const [resultValue, setResultValue] = useState();
  const doSomething = (res) => {
    setResultValue(res);
  };
  return (
    <>
      <Operation onSomeEvent={doSomething} />
      <Result result={resultValue} />
    </>
  );
};

export default App;
