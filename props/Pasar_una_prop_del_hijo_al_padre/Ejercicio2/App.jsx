import { useState } from "react";
import MagicInput from "./components/MagicInput";

const App = () => {
  const [childValue, setChildValue] = useState(0);
  return (
    <div>
      <MagicInput
        updateValue={(outputValue) => setChildValue(outputValue)}
      ></MagicInput>
      <p>{outputValue}</p>
    </div>
  );
};

export default App;
