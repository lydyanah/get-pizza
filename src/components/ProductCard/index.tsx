import './styles.css';

interface IProduct {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const ProductCard = (props:IProduct) => {
    return(
        <div className="product-card">
            <img className="poster" src={props.Poster} alt={props.Title} />
            <div className="info">
                <h1>{props.Title}</h1>
                <h2>{props.Year} [{props.imdbID}]</h2>
                <h3>{props.Type}</h3>
            </div>
        </div>
    );
}

export default ProductCard;
