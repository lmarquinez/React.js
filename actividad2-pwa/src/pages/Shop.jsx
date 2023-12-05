import { useState } from "react";
import { getProducts } from "../app/api";
import {
  ShopWrapper,
  Input,
  Button,
  ProductList,
  ProductItem,
  ProductImage,
} from "../assets/style/styles.js";
import "../App.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  const handleSearch = async () => {
    try {
      setProducts(await getProducts(searchProduct));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ShopWrapper>
      <h2>Shop component</h2>
      <Input
        type="text"
        placeholder="Enter product term..."
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </ProductItem>
        ))}
      </ProductList>
    </ShopWrapper>
  );
};

export default Shop;
