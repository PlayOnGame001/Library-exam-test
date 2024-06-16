import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import IProduct from "../../models/IProduct";
import "./styles.css";

function ListOfProducts() {
  const [data, setData] = useState<Array<IProduct>>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase()) ||
      item.genre.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (product: IProduct) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct: IProduct) => {
    const updatedData = data.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setData(updatedData);
    setEditingProduct(null);
  };

  return (
    <>
      <div className="filter-container">
        <button onClick={toggleFilter} className="btn btn-filter">
          {filterOpen ? "Close Filter" : "Open Filter"}
        </button>
      </div>
      {filterOpen && (
        <div className="filter-bar">
          <input 
            type="text" 
            placeholder="Search by name, author, or genre" 
            value={search} 
            onChange={handleSearch} 
          />
        </div>
      )}
      <div className="row">
        {filteredData.length > 0 ? (
          filteredData.map((el: IProduct) => (
            <div className="col-md-3 product-block" key={el.id}>
              <Card props={el} loadBook={() => loadBook(el.id)} onEdit={handleEdit} />
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
      {loading ? <p>Loading...</p> : <div className="book-text"><pre>{text}</pre></div>}
    </>
  );
}

export default ListOfProducts;
