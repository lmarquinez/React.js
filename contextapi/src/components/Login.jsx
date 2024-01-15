import { useMyContext } from "../app/provider.jsx";

const Login = () => {
  const [state, setState] = useMyContext();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setState({ ...state, name: e.target.value });
        }}
      />

      <input
        type="text"
        onChange={(e) => {
          setState({ ...state, surname: e.target.value });
        }}
      />
    </div>
  );
};

export default Login;
