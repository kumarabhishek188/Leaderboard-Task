import React, { useState } from "react";
import usersData from "./data";
import "./Leaderboard.css";

const ITEMS_PER_PAGE = 20;

const Leaderboard = () => {
  const topThree = usersData.slice(0, 3);
  const others = usersData.slice(3);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = others.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(others.length / ITEMS_PER_PAGE);

  const getMedalClass = (index) => {
    if (index === 0) return "gold";
    if (index === 1) return "silver";
    if (index === 2) return "bronze";
    return "";
  };

  return (
    <div>
      <div className="row top-three mb-4">
        {topThree.map((user, index) => (
          <div key={user.id} className="col-md-4 col-sm-12 text-center">
            <div className={`card rank-card rank-${index + 1} ${getMedalClass(index)}`}>
              <div className="card-body">
                {index === 0 && (
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABgUlEQVRoge2ZMU7DQBBFR6QKUAKUAEpABKQASkAFpAApQApQApQApQApQApwLmb1ndm6bY9c3NnZsZmYHvctfHgh+MnQAHYAMk+x44ZjvzkPPMEuEDKcDncxDvOdhLnA0CcPoAYekCDj3XAIF58QhBBCEEEEKwAHu7gA3uETpMgzgAdzPBEqSJq43guoI4rKPc3rFYvtdZqkeXGLBoHv0FZ5n2q9Xr9Xq9Uq/E3i+VSiUajVajXa73YAjGcxxnMIZf3AM6ATzpuCENcB54Lj3ArOAjeGm8A54Cz3Ak+AjuGm8AZ5Kz1zVKprwAO3p+81Rr9Vv1F5vPpNfr9XxjX1vlaoKoy+AAAAAElFTkSuQmCC"
                    alt="Crown"
                    className="crown"
                  />
                )}
                <div className="circle-avatar crown-wrapper">
                  <img src={user.avatar} alt={user.name} className="avatar mb-2" />
                  <span className="rank-inside">#{index + 1}</span>
                </div>
                <h5 className="card-title">{user.name}</h5>
                <p className="points">{user.points.toLocaleString()} pts</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="list-group">
        {currentItems.map((user, index) => {
          const position = index + 4 + (currentPage - 1) * ITEMS_PER_PAGE;
          return (
            <div key={user.id} className="list-group-item d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="circle-avatar-sm me-2">
                  <img src={user.avatar} alt={user.name} className="avatar-sm" />
                  <span className="rank-inside-sm">#{position}</span>
                </div>
                <span>{user.name}</span>
              </div>
              <span className="badge bg-primary rounded-pill">{user.points.toLocaleString()} pts</span>
            </div>
          );
        })}
      </div>

      <div className="pagination mt-4 d-flex justify-content-center">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn btn-sm mx-1 ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;



