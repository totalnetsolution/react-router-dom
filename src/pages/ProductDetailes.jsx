import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Product Not Found:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="container mx-auto p-5">
      <div className="card shadow-lg bg-base-100 p-5">
        <figure>
          <img src={product.thumbnail} alt={product.title} className="h-96 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold">{product.title}</h1>
          <p className="text-lg">{product.description}</p>
          <p className="text-lg font-bold text-primary">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
