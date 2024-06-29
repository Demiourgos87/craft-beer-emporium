import { Link } from 'react-router-dom';
import { Product } from '../../constants/types';

// components
import Button from '../button/button';

// styles
import './product-card.scss';
import { useProductStore } from '../../store/product-store';

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
  const addToCart = useProductStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img className="product-image" src={image} alt={name} />

        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-rating">
            Rating: {average.toFixed(1)} from {reviews} reviews
          </p>
          <p className="product-price">Price: {price}</p>
        </div>
      </Link>

      <Button
        text="Add to cart"
        onClick={handleAddToCart}
        style={{ marginTop: 'auto', textAlign: 'center' }}
      />
    </div>
  );
};

export default ProductCard;
