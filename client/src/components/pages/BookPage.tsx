import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookPage() {
  const { bookId} = useParams();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookText = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/books/${bookId}`);
        setText(response.data);
      } catch (error) {
        console.error("Error fetching book text:", error);
        setText("Error loading book text");
      }
      setLoading(false);
    };

    fetchBookText();
  }, [bookId]);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{text}</p>}
    </div>
  );
}

export default BookPage;
