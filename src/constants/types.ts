export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: {
    average: number;
    reviews: number;
  };
};

export type SortOption = {
  key: string;
  label: string;
};

export type FilterOption = {
  key: string;
  label: string;
  values: string[];
};

export type IconProps = {
  color?: string;
  width?: string;
  height?: string;
};
