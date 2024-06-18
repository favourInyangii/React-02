// App.js

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
