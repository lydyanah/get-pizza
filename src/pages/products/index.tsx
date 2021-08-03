import { useEffect, useState } from "react";
import GlobalMenu from "../../components/GlobalMenu";
import ProductCard from "../../components/ProductCard";
import api from "../../services/api";

interface IProduct {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const loadingProducts = async () => {
    const results = await api.get(`/?apikey=64c32d40&s=lord`);
    setProducts(results.data.Search);
  };

  useEffect(() => {
    loadingProducts();
  }, []);

  return (
    <>
      <GlobalMenu />
      <header>
        <h1>Produtos</h1>
      </header>
      <ul className="products">
        {products.map((p) => {
          return (
            <li className="item">
              <ProductCard
                Title={p.Title}
                Year={p.Year}
                imdbID={p.imdbID}
                Type={p.Type}
                Poster={p.Poster}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
