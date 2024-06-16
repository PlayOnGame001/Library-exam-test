import React, { useState, useEffect } from "react";
import axios from "axios";
import EditModal from "../../models/EditModel"; 
import IProduct from "../../models/IProduct";

const EditBooksPage: React.FC = () => {
  const [data, setData] = useState<Array<IProduct>>([]);
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {   
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/products");
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleEdit = (product: IProduct) => {
    setEditingProduct(product);
  };

  const handleSave = async (updatedProduct: IProduct) => { //для асинхронной работы с сервером
    try {
      await axios.put(`http://localhost:3001/products/${updatedProduct.id}`, updatedProduct);
      const updatedData = data.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      setData(updatedData);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Редактировать книги</h1>
      <div className="row">
        {data.map((product) => (
          <div key={product.id} className="col-md-3 product-block">
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
          </div>
        ))}
      </div>
      {editingProduct && (
        <EditModal product={editingProduct} onClose={() => setEditingProduct(null)} onSave={handleSave}/> //модальное окно для редактирования
      )}
    </>
  );
};

export default EditBooksPage;
