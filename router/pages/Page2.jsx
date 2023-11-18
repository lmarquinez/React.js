import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>

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
    </div>
  );
};
