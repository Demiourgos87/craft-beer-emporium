import { ReactNode } from 'react';

// styles
import './modal.scss';

type ModalProps = {
  title?: string;
  children?: ReactNode;
  open?: boolean;
};

const Modal = ({ title, children, open }: ModalProps) => {
  return (
    <div className={`modal-container${open ? ' open' : ''}`}>
      <div className="modal-content">
        {title && <h3 className="modal-title">{title}</h3>}

        {children}
      </div>
    </div>
  );
};

export default Modal;
