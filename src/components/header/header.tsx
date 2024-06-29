// hooks
import { useProductStore } from '../../store/product-store';

// components
import IconCart from '../icons/icon-cart';

// styles
import './header.scss';

const Header = () => {
  const cart = useProductStore((state) => state.cart);

  return (
    <div className="header">
      <img className="brand-logo" src="/logo.jpg" alt="logo" />

      <p className="brand-name">Craft Beer Emporium</p>

      <div className="cart">
        {cart.length !== 0 && <div className="cart-indicator">{cart.length}</div>}
        <IconCart width="35px" height="35px" />
      </div>
    </div>
  );
};

export default Header;
