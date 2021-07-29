import { Link } from "react-router-dom";
import "./styles.css";

const GlobalMenu = () => {
  return (
    <nav>
      <a><Link to="/">Home</Link></a>
      <a><Link to="/products">Produtos</Link></a>
      <a><Link to="/tests">Testes</Link></a>
    </nav>
  );
};

export default GlobalMenu;
