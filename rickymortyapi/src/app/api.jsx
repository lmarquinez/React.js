import axios from "axios";

export const getCharacters = async () => {
  const res = await axios.get("https://rickandmortyapi.com/api/character");
  //res.data.results.slice(0,5);
  return res.data.results;
};
