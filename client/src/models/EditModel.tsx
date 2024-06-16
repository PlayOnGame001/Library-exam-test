import React, { useState } from "react";
import IProduct from "./IProduct";

interface EditModalProps {
  product: IProduct;
  onClose: () => void;
  onSave: (product: IProduct) => void;
}

const EditModal: React.FC<EditModalProps> = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState<IProduct>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Редактировать книгу</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Название</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">Автор</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="genre" className="form-label">Жанр</label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">URL изображения</label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Описание</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
