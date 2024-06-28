import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/api';
import { Product } from '../constants/types';

// components
import PageLayout from '../components/layouts/page-layout';
import Loader from '../components/loader/loader';
import ProductInfo from '../components/product-info/product-info';
import Back from '../components/back/back';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  const fetchProduct = async () => {
    try {
      const product = await getProductById(id);
      setProduct(product);
    } catch (error) {
      throw new Error('Error fetching product!');
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

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
