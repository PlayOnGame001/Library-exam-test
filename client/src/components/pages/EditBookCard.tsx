import React from "react";
import { Link } from "react-router-dom";
import IProduct from "../../models/IProduct";

interface EditBookCardProps {
  product: IProduct;
  handleEdit: (product: IProduct) => void;
}

export const EditBookCard: React.FC<EditBookCardProps> = ({ product, handleEdit }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-author" style={{ fontSize: "0.9rem", color: "#777" }}>
          Автор: {product.author}
        </p>
        <p className="card-genre" style={{ fontWeight: "bold" }}>
          Жанр: {product.genre}
        </p>
        <p className="card-genre" style={{ fontWeight: "bold" }}>
          Описание: {product.description}
        </p>
        <button className="btn btn-primary" onClick={() => handleEdit(product)}>
          Редактировать
        </button>
      </div>
    </div>
  );
};
