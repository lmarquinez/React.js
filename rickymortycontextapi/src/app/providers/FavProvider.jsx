import { createContext, useState, useContext } from "react";

export const AppContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => useContext(AppContext);

// eslint-disable-next-line react/prop-types
const FavProvider = ({ children }) => {
  const [favCharacters, setFavCharacter] = useState([]);
  return (
    <AppContext.Provider value={[favCharacters, setFavCharacter]}>
      {children}
    </AppContext.Provider>
  );
};

export default FavProvider;
