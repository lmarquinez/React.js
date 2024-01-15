import axios from "axios";

export const getCharacters = async () => {
  const res = await axios.get("https://swapi.dev/api/people/");
  return res.data.results;
};
