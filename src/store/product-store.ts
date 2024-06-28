import { create } from 'zustand';
import { Product } from '../constants/types';
import { getProducts } from '../api/api';

type ProductState = {
  products: Product[] | null;
  setProducts: (products: Product[] | null) => void;
  fetchProducts: () => Promise<void>;
  getProductById: (id: string) => Product | undefined;
  get10MostPopular: () => Product[] | undefined;
};

export const useProductStore = create<ProductState>((set, get) => ({
  products: null,
  setProducts: (products) => set({ products }),
  fetchProducts: async () => {
    try {
      const products = await getProducts();
      set({ products });
    } catch (error) {
      throw new Error('Failed fetching products!');
    }
  },
  getProductById: (id: string) => {
    const products = get().products;

    if (products) {
      return products.find((product) => product.id === Number(id));
    }

    return undefined;
  },
  get10MostPopular: () => {
    const products = get().products;

    if (products) {
      return products
        .sort((x, y) => {
          if (x.rating.reviews > y.rating.reviews) return -1;
          if (x.rating.reviews < y.rating.reviews) return 1;
          return 0;
        })
        .slice(0, 10);
    }

    return undefined;
  },
}));
