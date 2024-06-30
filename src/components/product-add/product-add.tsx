import { useState } from 'react';
import { FieldValues, FormProps, useForm } from 'react-hook-form';

// components
import Button from '../button/button';
import Modal from '../modal/modal';

// styles
import './product-add.scss';

const ProductAdd = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: FormProps<FieldValues>) => {
    // process form data further
    console.log(data);
  };

  const handleCloseModal = () => {
    setModalOpened(false);
    reset();
  };

  return (
    <div className="product-add">
      <Button text="Add new product" onClick={() => setModalOpened(true)} />

      <Modal title="Add new product" open={modalOpened}>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-field">
            <label className="input-label" htmlFor="name">
              Product Name:
            </label>
            <input
              className="input-field"
              id="name"
              {...register('name', { required: 'Product name is required' })}
            />
            {errors.name && <p className="input-error">{errors.name.message as string}</p>}
          </div>

          <div className="form-field">
            <label className="input-label" htmlFor="brand">
              Product Brand:
            </label>
            <input
              className="input-field"
              id="brand"
              {...register('brand', { required: 'Product brand is required' })}
            />
            {errors.brand && <p className="input-error">{errors.brand.message as string}</p>}
          </div>

          <div className="form-field">
            <label className="input-label" htmlFor="image">
              Product Image:
            </label>
            <input
              className="input-field"
              id="image"
              {...register('image', { required: 'Product image is required' })}
            />
            {errors.image && <p className="input-error">{errors.image.message as string}</p>}
          </div>

          <div className="form-buttons">
            <Button text="Submit" type="submit" />
            <Button text="Cancel" onClick={handleCloseModal} />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProductAdd;
