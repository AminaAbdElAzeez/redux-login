import React from "react";

function Logout({ username, handleLogout }) {
  return (
    <div>
      <button className="check">
        <i className="bi bi-check-lg"></i>
      </button>
      <h2>Welcome, {username} 🌹🤝</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
