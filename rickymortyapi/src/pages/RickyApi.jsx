import { useState, useEffect } from "react";
import { getCharacters } from "../app/api.jsx";
import { Card, Detail } from "../styles.jsx";

const RickyApi = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setCharacters(await getCharacters());
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const addToFavorites = (character) => {
    setFavorites([...favorites, character]);
  };

  const removeFromFavorites = (characterId) => {
    const updatedFavorites = favorites.filter(
      (character) => character.id !== characterId
    );
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <div>
        <h1>CHARACTERS:</h1>
        {characters.map((character) => (
          <Card key={character.id} onClick={() => addToFavorites(character)}>
            <img src={character.image} alt="" />
            <Detail>
              <div>Name: {character.name}</div>
              <div>Gender: {character.gender}</div>
            </Detail>
          </Card>
        ))}
      </div>
      <div>
        <h1>My List:</h1>
        {favorites.map((character) => (
          <Card
            key={character.id}
            onClick={() => removeFromFavorites(character.id)}
          >
            <img src={character.image} alt="" />
            <Detail>
              <div>Name: {character.name}</div>
              <div>Gender: {character.gender}</div>
            </Detail>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RickyApi;
