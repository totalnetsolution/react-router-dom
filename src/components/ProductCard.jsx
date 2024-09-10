import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-lg bg-base-100 p-5">
      <figure>
        <img src={product.thumbnail} alt={product.title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{product.title}</h2>
        <p>{product.description.slice(0, 100)}...</p>
        <p className="text-lg font-bold text-primary">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary mt-2">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
