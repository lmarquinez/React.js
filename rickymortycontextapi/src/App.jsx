import Router from "./app/Router";
import FavProvider from "./app/providers/FavProvider";

const App = () => (
  <FavProvider>
    <Router />
  </FavProvider>
);

export default App;
