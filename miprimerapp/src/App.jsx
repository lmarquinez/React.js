import { useRef, useState } from "react";
import MyComponent from "./components/MyComponent";
import ComponentA from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import ComponentC, { ComponentD } from "./components/ComponentC";

const App = () => {
  /* JSX */
  const element = (
    <>
      {" "}
      <h1> Hola </h1> <p>adios</p>
    </>
  );
  const sum = 4 + 4;
  const addNumbers = (a, b) => {
    return a + b;
  };
  const numbers = [1, 3, 5, 7, 9];
  const btnClicked = () => {
    alert("You have clicked on the button!");
  };

  /* HOOK useRef() */
  const nameRef = useRef();
  const resultRef = useRef();

  const btnClick = () => {
    const txt = nameRef.current.value;
    resultRef.current.innerHTML = nameRef.current.value;
    alert(txt);
  };

  /* HOOK useState() */
  const [n, setN] = useState(0);
  let number = 1;
  const btnSumNumber = () => {
    number = number + 1;
    alert(number);
    setN(n + 1);
  };

  /* RENDERIZADO CONDICIONAL */
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div>
        {/* JSX */}
        {element}
        {sum}
        {addNumbers(4, 5)}
        <div>
          {numbers.map((n, key) => {
            return <p key={key}>{n}</p>;
          })}
        </div>
        <button onClick={btnClicked}> Click </button>
      </div>

      <div>
        {/* HOOK useRef() */}
        <input type="text" ref={nameRef} />
        <button onClick={btnClick}> Click </button>
        <p ref={resultRef}></p>
      </div>

      {/* HOOK useState() */}
      <button onClick={btnSumNumber}> Count </button>
      <p>Count: {number}</p>
      <p>Count: {n}</p>

      {/* COMPONENTS */}
      <MyComponent></MyComponent>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
      <ComponentC></ComponentC>
      <ComponentD></ComponentD>

      {/* RENDERIZADO CONDICIONAL */}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible ? <componentA /> : <componentB />}
    </>
  );
};
export default App;
