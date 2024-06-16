import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import Register from "./components/pages/Register";
import Navbar from "./components/pages/Nabvar";
import NotFoundPage from "./components/pages/NotFoundPage";
import EditBooksPage from "./components/pages/EditPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/" element={<Home />}/>
          <Route index element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/edit-books" element={<EditBooksPage />}/> 
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
