import React, { useState } from "react";
import axios from "axios";
import "./AddBook.css";

const AddBookPage: React.FC = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBook = {
      id: generateUUID(),
      categoryId: "d6b69746-b24c-4f42-927b-78c1d539af38",
      slug: bookData.title.toLowerCase().replace(/ /g, "-"),
      name: bookData.title,
      author: bookData.author,
      genre: bookData.genre,
      description: bookData.description,
      mark: "9/10",  
      imageUrl: "vopros.png",  
      isActive: true,
    };

    try {
      const response = await axios.post("http://localhost:3001/products", newBook);
      setMessage("Книга успешно добавлена!");

      setBookData({
        title: "",
        author: "",
        genre: "",
        description: "",
      });
    } catch (error) {
      setMessage("Не удалось добавить книгу.");
      console.error("Ошибка при добавлении книги:", error);
    }
  };

  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
    <div className="add-book-page">
      <h1>Добавить книгу</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="add-book-form">
        <label>
          Название книги:
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Автор:
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Жанр:
          <input
            type="text"
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Описание:
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Добавить книгу</button>
      </form>
    </div>
  );
};

export default AddBookPage;
