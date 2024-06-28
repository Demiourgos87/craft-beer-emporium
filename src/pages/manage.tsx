// hooks
import { useProductStore } from '../store/product-store';

// components
import PageLayout from '../components/layouts/page-layout';
import Loader from '../components/loader/loader';
import Chart from '../components/chart/chart';
import ProductAdd from '../components/product-add/product-add';
import Back from '../components/back/back';

const ManagePage = () => {
  const products = useProductStore((state) => state.get10MostPopular());

  return (
    <PageLayout>
      {!products ? (
        <Loader />
      ) : (
        <div className="manage-page">
          <Back to="/" text="Back to homepage" />
          <h2 className="page-title">Manage products</h2>

          <Chart products={products} />

          <ProductAdd />
        </div>
      )}
    </PageLayout>
  );
};

export default ManagePage;
