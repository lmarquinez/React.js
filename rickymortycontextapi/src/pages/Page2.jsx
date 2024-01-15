import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharactersById } from "../app/api";
import { useMyContext } from "../app/providers/FavProvider.jsx";

const Page2 = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [favCharacters, setFavCharacters] = useMyContext();

  useEffect(() => {
    const f = async () => {
      try {
        setCharacter(await getCharactersById(id));
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    f();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt="" />
      <button
        onClick={() => {
          setFavCharacters([...favCharacters, character]);
        }}
      ></button>
    </div>
  );
};

export default Page2;
