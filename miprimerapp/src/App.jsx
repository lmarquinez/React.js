import { useRef, useState } from "react";
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
    </>
  );
};
export default App;
