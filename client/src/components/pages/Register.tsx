import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    login: "",
    gender: "male",
    password: "" 
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateUser = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3001/users",
        formData
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={handleUpdateUser}>
            <div className="mb-3">
              <label aria-placeholder="exampleInputEmail1" className="form-label">
                Электронный адрес
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                Ваш эмаил теперь наш
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputLogin" className="form-label">
                Логин
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLogin"
                name="login"
                value={formData.login}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label aria-placeholder="test" className="form-label">
                Пароль
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Пол:</label><br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Мужчина
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Женщина 
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;



