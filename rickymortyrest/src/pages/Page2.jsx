import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharactersById } from "../app/api";

const Page2 = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

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
    </div>
  );
};

export default Page2;
