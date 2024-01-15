import { useEffect, useState } from "react";
import { getCharacters } from "../app/api";
import { Link } from "react-router-dom";
import { useMyContext } from "../app/providers/FavProvider.jsx";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [favCharacters] = useMyContext();

  useEffect(() => {
    const f = async () => {
      try {
        setCharacters(await getCharacters());
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    f();
  }, []);

  return (
    <div>
      <h1>Characters:</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <Link to={"/page2/" + character.id}>{character.name}</Link>
          <img src={character.image} />
        </div>
      ))}

      <h1>My list:</h1>
      {favCharacters.map((character) => (
        <div key={character.id}>
          <Link to={"/page2/" + character.id}>{character.name}</Link>
          <img src={character.image} />
        </div>
      ))}
    </div>
  );
};

export default Home;
