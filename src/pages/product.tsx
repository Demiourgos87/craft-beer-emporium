import { useParams } from 'react-router-dom';

// hooks
import { useProductStore } from '../store/product-store';

// components
import PageLayout from '../components/layouts/page-layout';
import Loader from '../components/loader/loader';
import ProductInfo from '../components/product-info/product-info';
import Back from '../components/back/back';

const ProductPage = () => {
  const { id } = useParams();
  const product = useProductStore((state) => state.getProductById(id as string));

  return (
    <PageLayout>
      {!product ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <div className="product-page">
          <Back to="/" text="Back to homepage" />

          <ProductInfo product={product} />
        </div>
      )}
    </PageLayout>
  );
};

export default ProductPage;
