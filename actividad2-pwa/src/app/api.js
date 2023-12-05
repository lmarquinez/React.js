import axios from "axios";

export const getProducts = async (searchProduct) => {
  const res = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${searchProduct}`
  );
  return res.data.results;
};
