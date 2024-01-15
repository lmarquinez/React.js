import { useMyContext } from "../app/provider.jsx";

const Showstate = () => {
  const [state] = useMyContext();
  return (
    <div>
      <p>{state.name}</p>
      <p>{state.surname}</p>
    </div>
  );
};

export default Showstate;
