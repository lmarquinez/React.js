import { useState } from "react";

const Operation = ({ doSomething }) => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  return (
    <div>
      <input type="number" onChange={(a) => setNum1(a.target.value)} />
      <input type="number" onChange={(a) => setNum2(a.target.value)} />

      <button onClick={() => doSomething(num1 * num2)}>Calcular</button>
    </div>
  );
};

export default Operation;
