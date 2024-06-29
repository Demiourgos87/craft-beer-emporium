import { Product } from '../../constants/types';
import { useProductStore } from '../../store/product-store';
import Button from '../button/button';

// styles
import './product-info.scss';

type ProductInfoProps = {
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const {
    image,
    name,
    price,
    rating: { average, reviews },
  } = product;
  const addToCart = useProductStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="single-product-info">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-data">
        <div className="product-name">{name}</div>

        <div className="separator"></div>

        <div className="product-price">{price}</div>
        <div className="product-rating">
          Rating: {average.toFixed(1)} from {reviews} reviews
        </div>

        <div className="separator"></div>

        <div className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>

        <div className="separator"></div>

        <Button text="Add to cart" onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductInfo;
