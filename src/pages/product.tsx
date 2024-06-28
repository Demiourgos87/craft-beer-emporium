import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/api';
import { Product } from '../constants/types';

// components
import PageLayout from '../components/layouts/page-layout';
import Loader from '../components/loader/loader';

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
          PRODUCT WITH ID: {id} AND NAME {product.name}
        </div>
      )}
    </PageLayout>
  );
};

export default ProductPage;
