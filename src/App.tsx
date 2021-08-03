import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Tests from "./pages/tests";
import RegisterProducts from "./pages/registerProducts";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/registerProducts" component={RegisterProducts} />
        <Route path="/tests" component={Tests} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
