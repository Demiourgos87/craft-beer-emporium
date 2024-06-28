// styles
import './button.scss';

type ButtonProps = {
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ text, type = 'button', onClick }: ButtonProps) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
