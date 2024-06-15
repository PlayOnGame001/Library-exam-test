import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import IProduct from "../../models/IProduct";
import "./styles.css"; 

function ListOfProducts() {
  const [data, setData] = useState<Array<IProduct>>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const loadBook = async (bookId: any) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/books/${bookId}`);
      setText(response.data);
    } catch (error) {
      console.error("Error loading book:", error);
      setText("Error loading book");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="row">
        {data.map((el: IProduct) => {
          return (
            <div className="col-md-3 product-block" key={el.id}>
              <Card props={el} loadBook={() => loadBook(el.id)} />
            </div>
          );
        })}
      </div>
      {loading ? <p>Loading...</p> : <div className="book-text"><pre>{text}</pre></div>}
    </>
  );
}

export default ListOfProducts;
