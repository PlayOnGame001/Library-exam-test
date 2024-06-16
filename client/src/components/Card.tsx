import { Link } from "react-router-dom";
import IProduct from "../models/IProduct";
import  "./StyleCard.css";
import "./pages/styles.css"

interface CardProps {
  props: IProduct;
  loadBook: () => void;
  onEdit: (product: IProduct) => void;
}

function Card({ props, loadBook }: CardProps) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imageUrl} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-author" style={{ fontSize: "0.9rem", color: "#777" }}>
          Автор: {props.author}
        </p>
        <p className="card-mark">
          Оценка: {props.mark}
        </p>
        <p className="card-genre">
          Жанр: {props.genre}
        </p>
        <p className="card-text">
          Описание: {props.description}
        </p>
        <Link to={`/book/${props.id}`} className="btn btn-primary">
          Читать
        </Link>
      </div>
    </div>
  );
}

export default Card;
