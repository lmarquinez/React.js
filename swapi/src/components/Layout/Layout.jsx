import { Link } from "react-router-dom";
import { Nav, Logo, Links } from "./Layout.styles";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div>
    <Nav>
      <Logo
        src="https://rlv.zcache.com/darth_vader_star_wars_logo_classic_round_sticker-rf50e72fed8e84a86b63ab3f4b40f0a5d_0ugmp_8byvr_307.jpg"
        alt="Logo"
      />
      <Links>
        <Link to="/">Home</Link>
        <Link to="/swapi">SWAPI</Link>
      </Links>
    </Nav>
    <main>{children}</main>
  </div>
);

export default Layout;
