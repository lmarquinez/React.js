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

  return (
    <>
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
    </>
  );
};
export default App;
