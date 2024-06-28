import { Product } from '../../constants/types';

// components
import ProductCard from '../product-card/product-card';

// styles
import './product-grid.scss';

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
