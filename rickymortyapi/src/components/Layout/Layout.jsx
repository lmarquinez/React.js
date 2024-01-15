import { Link } from "react-router-dom";
import { Nav, Logo, Links } from "./Layout.styles";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div>
    <Nav>
      <Logo
        src="https://i5.walmartimages.com/asr/a89ed403-fd86-4332-8efc-fdd96f1af74d.c9ebf9f1ed9c6f26964513ae14595c9d.png"
        alt="Logo"
      />
      <Links>
        <Link to="/">Home</Link>
        <Link to="/rickyapi">Ricky API</Link>
      </Links>
    </Nav>
    <main>{children}</main>
  </div>
);

export default Layout;
