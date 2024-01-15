import { useEffect, useState } from "react";
import { getCharacters } from "../app/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);

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
      {characters.map((character) => (
        <div key={character.id}>
          <Link to={"/page2/" + character.id}>{character.name}</Link>
          <img src={character.image} />
        </div>
      ))}
    </div>
  );
};

export default Home;
