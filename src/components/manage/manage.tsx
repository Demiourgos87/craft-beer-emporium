// hooks
import { useProductStore } from '../../store/product-store';

// components
import Chart from '../chart/chart';
import IconClose from '../icons/icon-close';
import Loader from '../loader/loader';
import ProductAdd from '../product-add/product-add';

// styles
import './manage.scss';

type ManageProps = {
  onClose: () => void;
};

const ManageComponent = ({ onClose }: ManageProps) => {
  const products = useProductStore((state) => state.get10MostPopular());

  const handleCloseManage = () => {
    onClose();
  };

  return !products ? (
    <Loader />
  ) : (
    <div className="manage">
      <div className="close" onClick={handleCloseManage}>
        <IconClose />
      </div>

      <h2 className="title">Manage products</h2>

      <Chart products={products} />

      <ProductAdd />
    </div>
  );
};

export default ManageComponent;
