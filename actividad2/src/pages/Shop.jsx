import { useState, useEffect } from "react";
import { getProducts } from "../app/api";
import styled from "styled-components";
import "../App.css";

const ShopWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  overflow: scroll;
  height: 58vh;
`;

const ProductItem = styled.div`
  width: 200px;
  margin: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

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
