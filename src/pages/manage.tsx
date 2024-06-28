import { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import { Product } from '../constants/types';

// components
import PageLayout from '../components/layouts/page-layout';
import Loader from '../components/loader/loader';
import Chart from '../components/chart/chart';
import ProductAdd from '../components/product-add/product-add';

const ManagePage = () => {
  const [products, setProducts] = useState<Product[]>();

  const fetchData = async () => {
    try {
      const products: Product[] = await getProducts();
      const sorted = products.sort((x, y) => {
        if (x.rating.reviews > y.rating.reviews) return -1;
        if (x.rating.reviews < y.rating.reviews) return 1;
        return 0;
      });

      const mostPopular = sorted.slice(0, 10);

      setProducts(mostPopular);
    } catch (error) {
      throw new Error('Failed fetching products!');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageLayout>
      {!products ? (
        <Loader />
      ) : (
        <div className="manage-page">
          <h2 className="page-title">Manage products</h2>

          <Chart products={products} />

          <ProductAdd />
        </div>
      )}
    </PageLayout>
  );
};

export default ManagePage;
