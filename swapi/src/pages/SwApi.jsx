import { useState, useEffect } from "react";
import { getCharacters } from "../app/api.jsx";
import { Character } from "../assets/styles/styles.jsx";

const SwApi = () => {
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

  const removeFromFavorites = (characterName) => {
    const updatedFavorites = favorites.filter(
      (character) => character.name !== characterName
    );
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <div>
        <h1>CHARACTERS:</h1>
        {characters.map((character) => (
          <div key={character.name} onClick={() => addToFavorites(character)}>
            <Character>
              <div>Name: {character.name}</div>
              <div>Gender: {character.gender}</div>
            </Character>
          </div>
        ))}
      </div>
      <div>
        <h1>FAVORITES:</h1>
        {favorites.map((character) => (
          <div
            key={character.name}
            onClick={() => removeFromFavorites(character.name)}
          >
            <Character>
              <div>Name: {character.name}</div>
              <div>Gender: {character.gender}</div>
            </Character>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwApi;
