import { Link } from "react-router-dom";
import "./styles.css";

const GlobalMenu = () => {
  return (
    <nav className="globalMenu">
      <Link to="/" className="menuItem">Home</Link>
      <Link to="/products" className="menuItem">Produtos</Link>
      <Link to="/tests" className="menuItem">Testes</Link>
    </nav>
  );
};

export default GlobalMenu;
