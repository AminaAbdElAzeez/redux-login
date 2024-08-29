import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, setToken } from "./Store/Actions/AuthActions";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import Toast from "./Components/Toast/Toast";
import "./App.css";
import axiosInstance from "./Utils/AxiosInstance";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const token = useSelector((state) => state.token);
  const loggedInEmail = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setToastMessage("Please fill all fields 👀");
      return;
    }

    const loginData = { email, password };

    axiosInstance
      .post("/admin/login", loginData)
      .then((response) => {
        const data = response.data;
        if (data.token) {
          dispatch(setToken(data.token, email));
          setEmail("");
          setPassword("");
          setToastMessage("Login successfully 🌹 ");
        } else {
          setToastMessage("Login Failed 🤷‍♂️ ");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setToastMessage("An error occurred. Please try again 🚫 ");
      });
  };

  const handleLogout = () => {
    dispatch(removeToken());
  };

  const handleCloseToast = () => {
    setToastMessage("");
  };

  return (
    <div className="app">
      {token ? (
        <Logout email={loggedInEmail} handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
      <Toast message={toastMessage} onClose={handleCloseToast} />
    </div>
  );
}

export default App;
