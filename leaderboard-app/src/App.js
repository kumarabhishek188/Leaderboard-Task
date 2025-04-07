import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Leaderboard from "./Leaderboard";

function App() {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🏆 Weekly Contribution Leaderboard</h2>
      <Leaderboard />
    </div>
  );
}

export default App;