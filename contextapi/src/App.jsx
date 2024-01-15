import MyStateProvider from "./app/provider.jsx";
import ShowState from "./components/Showstate.jsx";
import Login from "./components/Login.jsx";

const App = () => (
  <MyStateProvider>
    <Login />
    <ShowState />
  </MyStateProvider>
);

export default App;
