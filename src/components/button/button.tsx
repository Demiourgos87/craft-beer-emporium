// styles
import { CSSProperties } from 'react';
import './button.scss';

type ButtonProps = {
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
};

const Button = ({ text, type = 'button', onClick, style }: ButtonProps) => {
  return (
    <button className="btn" type={type} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
