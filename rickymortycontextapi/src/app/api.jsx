import axios from "axios";

export const getCharacters = async () => {
  const res = await axios.get("https://rickandmortyapi.com/api/character");
  return res.data.results;
};

export const getCharactersById = async (id) => {
  const res = await axios.get(
    "https://rickandmortyapi.com/api/character/" + id
  );
  return res.data;
};
