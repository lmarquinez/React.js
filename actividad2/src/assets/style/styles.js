import styled from "styled-components";

export const ShopWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  overflow: scroll;
  height: 58vh;
`;

export const ProductItem = styled.div`
  width: 200px;
  margin: 10px;
  text-align: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;
