import { Product } from '../../constants/types';

// components
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// styles
import 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type ChartProps = {
  products: Product[];
};

const Chart = ({ products }: ChartProps) => {
  const data = {
    labels: products.map((product) => product.name),
    datasets: [
      {
        label: 'Number of Reviews',
        data: products.map((product) => product.rating.reviews),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-wrap">
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Top Beers by Number of Reviews',
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
