import { Link } from "react-router-dom";
import IProduct from "../models/IProduct";

interface CardProps {
  props: IProduct;
}

function Card({ props }: CardProps) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imageUrl} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={`/book/${props.id}`} className="btn btn-primary">
          Read
        </Link>
      </div>
    </div>
  );
}

export default Card;
