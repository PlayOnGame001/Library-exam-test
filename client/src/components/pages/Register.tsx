import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    email: "test@gmail.com",
    login: "admin",
    gender: "male" 
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
      if (response.status === 200) {
        console.log(response);
      }
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
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
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
                Login
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
              <label>Gender:</label><br />
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
                  Male
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
                  Female
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <p>
            Email: {formData.email}. Login: {formData.login}. Gender: {formData.gender} 
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

