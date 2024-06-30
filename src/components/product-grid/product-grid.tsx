import { Product } from '../../constants/types';

// components
import ProductCard from '../product-card/product-card';

// styles
import './product-grid.scss';

type ProductGridProps = {
  products: Product[];
  onProductCLick: (id: number) => void;
};

const ProductGrid = ({ products, onProductCLick }: ProductGridProps) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onProductClick={onProductCLick} />
      ))}
    </div>
  );
};

export default ProductGrid;
