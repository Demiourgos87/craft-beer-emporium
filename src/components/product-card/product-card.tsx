import { Link } from 'react-router-dom';
import { Product } from '../../constants/types';
import './product-card.scss';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    name,
    image,
    price,
    rating: { average, reviews },
  } = product;

  return (
    <Link className="product-card" to={`/product/${id}`}>
      <img className="product-image" src={image} alt={name} />

      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-rating">
          Rating: {average.toFixed(1)} from {reviews} reviews
        </p>
        <p className="product-price">Price: {price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
