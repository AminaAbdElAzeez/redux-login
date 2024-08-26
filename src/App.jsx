import "./App.css";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, setToken } from "./Store/Actions/AuthActions";
import Logout from "./Components/Logout/Logout";
import { useState } from "react";
import Toast from "./Components/Toast/Toast";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setToastMessage("Please Fill All Fields 👀");
      return;
    }

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          dispatch(setToken(data.token));
          localStorage.setItem("token", data.token);
          setToastMessage("Successfully loggedIn 🌹 ");
        } else {
          setToastMessage("Login failed 🤷‍♂️ ");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setToastMessage("An Error Occurred. Please try again 🚫 ");
      });
  };

  const handleLogout = () => {
    dispatch(removeToken());
    localStorage.removeItem("token");
  };

  const handleCloseToast = () => {
    setToastMessage("");
  };

  return (
    <div className="app">
      {token ? (
        <Logout username={username} handleLogout={handleLogout} />
      ) : (
        <Login
          username={username}
          setUsername={setUsername}
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
