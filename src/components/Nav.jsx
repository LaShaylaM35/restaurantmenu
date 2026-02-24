import React from "react";

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>Welcome To My Restaurant</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/breakfast">
                  🥐 Breakfast
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/lunch">
                  🍜 Lunch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dinner">
                  🍛 Dinner
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/drinks">
                  🧋Drinks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/invoice">
                  🛒 Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/chatbot">
                  🤖 Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
