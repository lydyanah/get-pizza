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
            <ul className="info">
                <li className="title">{props.Title}</li>
                <li className="year">{props.Year}</li>
                <li className="imdbID">[{props.imdbID}]</li>
                <li className="type">{props.Type}</li>
            </ul>
        </div>
    );
}

export default ProductCard;
