import { useEffect, useState } from 'react';
import { Product } from '../../constants/types';

// hooks
import { useProductStore } from '../../store/product-store';

// components
import Loader from '../loader/loader';
import Filters from '../filters/filters';
import ProductGrid from '../product-grid/product-grid';
import Modal from '../modal/modal';
import ProductInfo from '../product-info/product-info';
import Button from '../button/button';
import ManageComponent from '../manage/manage';

const Recommendations = () => {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [manageModalOpen, setManageModalOpen] = useState(false);
  const [productToOpen, setProductToOpen] = useState(0);
  const { products, fetchProducts, setProducts } = useProductStore((state) => ({
    products: state.products,
    fetchProducts: state.fetchProducts,
    setProducts: state.setProducts,
  }));

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (!products) {
    return (
      <div className="loading">
        <Loader />
      </div>
    );
  }

  const handleOpenProduct = (id: number) => {
    setProductModalOpen(true);
    setProductToOpen(id);
  };

  const handleCloseSelectedProduct = () => {
    setProductModalOpen(false);
  };

  const handleOpenManageModal = () => {
    setManageModalOpen(true);
  };

  const handleCloseManageModal = () => {
    setManageModalOpen(false);
  };

  const sortBy = (sortBy: string) => {
    let sorted: Product[] = [];

    switch (sortBy) {
      case 'name':
        sorted = [...(products || [])].sort((x, y) => {
          if (x.name < y.name) return -1;
          if (x.name > y.name) return 1;
          return 0;
        });
        break;

      case 'rating':
        sorted = [...(products || [])].sort((x, y) => {
          if (x.rating.average > y.rating.average) return -1;
          if (x.rating.average < y.rating.average) return 1;
          return 0;
        });
        break;

      case 'reviews':
        sorted = [...(products || [])].sort((x, y) => {
          if (x.rating.reviews > y.rating.reviews) return -1;
          if (x.rating.reviews < y.rating.reviews) return 1;
          return 0;
        });
        break;

      case 'price':
        sorted = [...(products || [])].sort((x, y) => {
          const xNum = parseFloat(x.price.replace('$', ''));
          const yNum = parseFloat(y.price.replace('$', ''));

          if (xNum > yNum) return -1;
          if (xNum < yNum) return 1;
          return 0;
        });
        break;
    }

    setProducts(sorted);
  };

  const filterBy = ({ filterBy, val }: { filterBy: string; val: string }) => {
    let filtered: Product[] = [];

    switch (filterBy) {
      case 'brands':
        filtered = [...(products || [])].filter((item) => item.name.includes(val));
        break;

      case 'rating':
        filtered = [...(products || [])].filter(
          (item) => item.rating.average > Math.floor(Number(val.replace('+', ''))),
        );
        break;

      default:
        break;
    }

    setProducts(filtered);
  };

  return (
    <div className="product-recommendations">
      <Filters onSortSelect={sortBy} onFilterSelect={filterBy} />

      <Button text="Manage" onClick={handleOpenManageModal} />

      <ProductGrid products={products} onProductCLick={handleOpenProduct} />

      {productModalOpen && productToOpen ? (
        <Modal open={productModalOpen}>
          <ProductInfo productId={productToOpen} onClose={handleCloseSelectedProduct} />
        </Modal>
      ) : null}

      {manageModalOpen && (
        <Modal open={manageModalOpen}>
          <ManageComponent onClose={handleCloseManageModal} />
        </Modal>
      )}
    </div>
  );
};

export default Recommendations;
