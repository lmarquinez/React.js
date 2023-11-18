import { Link, useLocation } from "react-router-dom";

export const Home = () => {
  const query = new URLSearchParams(useLocation().search);

  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
        <li>
          <Link to="/product/1">Producto 1</Link>
        </li>
      </ul>

      <p>Param: {query.get("name")}</p>
    </div>
  );
};
