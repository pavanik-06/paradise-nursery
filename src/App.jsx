import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [page, setPage] = useState("home");

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (page === "plants") {
    return (
      <div>
        <nav className="navbar">
          <h2>🌿 Paradise Nursery</h2>

          <div>
            <button onClick={() => setPage("home")}>
              Home
            </button>

            <button onClick={() => setPage("plants")}>
              Plants
            </button>

            <button onClick={() => setPage("cart")}>
              Cart ({cartCount})
            </button>
          </div>
        </nav>

        <ProductList />
      </div>
    );
  }

  if (page === "cart") {
    return (
      <div>
        <nav className="navbar">
          <h2>🌿 Paradise Nursery</h2>

          <div>
            <button onClick={() => setPage("home")}>
              Home
            </button>

            <button onClick={() => setPage("plants")}>
              Plants
            </button>

            <button onClick={() => setPage("cart")}>
              Cart ({cartCount})
            </button>
          </div>
        </nav>

       <CartItem onContinueShopping={() => setPage("plants")} />
      </div>
    );
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for
          beautiful and healthy houseplants.
        </p>

        <button onClick={() => setPage("plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;