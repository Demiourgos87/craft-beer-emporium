import { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import { Product } from '../constants/types';

// components
import PageLayout from '../components/layouts/page-layout';
import Loader from '../components/loader/loader';
import Filters from '../components/filters/filters';
import ProductGrid from '../components/product-grid/product-grid';

const Homepage = () => {
  const [products, setProducts] = useState<Product[]>();

  const fetchData = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      throw new Error('Failed fetching products!');
    }
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageLayout>
      {!products ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <div className="homepage">
          <Filters onSortSelect={sortBy} onFilterSelect={filterBy} />
          <ProductGrid products={products} />
        </div>
      )}
    </PageLayout>
  );
};

export default Homepage;
