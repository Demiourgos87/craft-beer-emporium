import { useEffect } from 'react';
import { useProductStore } from '../../store/product-store';
import Button from '../button/button';
import IconClose from '../icons/icon-close';

// styles
import './product-info.scss';

type ProductInfoProps = {
  productId: number;
  onClose: () => void;
};

const ProductInfo = ({ productId, onClose }: ProductInfoProps) => {
  const { getProductById, selectedProduct, setSelectedProduct, removeSelectedProduct, addToCart } =
    useProductStore((state) => ({
      getProductById: state.getProductById,
      selectedProduct: state.selectedProduct,
      setSelectedProduct: state.setSelectedProduct,
      removeSelectedProduct: state.removeSelectedProduct,
      addToCart: state.addToCart,
    }));

  useEffect(() => {
    const product = getProductById(`${productId}`);
    setSelectedProduct(product);
  }, [selectedProduct]);

  if (!selectedProduct) {
    return null;
  }

  const {
    name,
    image,
    price,
    rating: { average, reviews },
  } = selectedProduct;

  const handleAddToCart = () => {
    addToCart(selectedProduct);
  };

  const handleClose = () => {
    onClose();
    removeSelectedProduct();
  };

  return (
    <div className="single-product-info">
      <div className="close" onClick={handleClose}>
        <IconClose />
      </div>

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
