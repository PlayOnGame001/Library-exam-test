import React, { useState, useEffect } from "react";
import axios from "axios";
import IProduct from "../models/IProduct";

interface EditModalProps {
  product: IProduct | null;
  onClose: () => void;
  onSave: (product: IProduct) => void;
}
const EditModal = ({ product, onClose, onSave }: EditModalProps) => {
  const [formData, setFormData] = useState<IProduct>(
    product || {
      id: "",
      name: "",
      description: "",
      imageUrl: "",
      isActive: false,
      author: "",
      genre: "",
      mark: "",
    }
  );
  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };
  if (!product) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Редактировать книгу</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Название:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Автор:
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </label>
          <label>
            Жанр:
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            />
          </label>
          <label>
            Описание:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            URL изображения:
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Сохранить</button>
          <button type="button" onClick={onClose}>Отмена</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;