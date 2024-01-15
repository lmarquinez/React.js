import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

// eslint-disable-next-line react/prop-types
const MyStateProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default MyStateProvider;
