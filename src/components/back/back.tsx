// components
import { Link } from 'react-router-dom';
import IconBack from '../icons/icon-back';

// styles
import './back.scss';

type BackProps = {
  text?: string;
  to: string;
};

const Back = ({ text, to }: BackProps) => {
  return (
    <Link className="back" to={to}>
      <IconBack />

      {text && <p className="text">{text}</p>}
    </Link>
  );
};

export default Back;
