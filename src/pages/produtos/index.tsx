import { useEffect, useState } from 'react';
import api from '../../services/api';

interface IProduct {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const Produtos = () => {
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
        <h1>Produtos</h1>
            <ul>
                {products.map(p => {
                    return (
                        <li>{p.Title}</li>
                    );
                })}
            </ul>
    </>
       
      
    )
}

export default Produtos;