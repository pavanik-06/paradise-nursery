import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb5",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Monstera",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 5,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2a4e3c6c",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c",
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1546470427-e26264be0b0d",
  },
  {
    id: 8,
    name: "Echeveria",
    category: "Succulents",
    price: 11,
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
  },
  {
    id: 9,
    name: "Jade Plant",
    category: "Succulents",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 13,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 12,
    name: "String of Pearls",
    category: "Succulents",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85",
  },

  // Flowering Plants
  {
    id: 13,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 14,
    name: "Orchid",
    category: "Flowering Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03",
  },
  {
    id: 15,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1615671524827-c1fe3973b648",
  },
  {
    id: 16,
    name: "African Violet",
    category: "Flowering Plants",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
  },
  {
    id: 17,
    name: "Begonia",
    category: "Flowering Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
  },
  {
    id: 18,
    name: "Geranium",
    category: "Flowering Plants",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1559563362-c667ba5f5480",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const renderPlants = (category) => {
    return plants
      .filter((plant) => plant.category === category)
      .map((plant) => (
        <div className="product-card" key={plant.id}>
          <img
            src={plant.image}
            alt={plant.name}
            width="200"
            height="200"
          />

          <h3>{plant.name}</h3>

          <p>${plant.price}</p>

          <button
            onClick={() => handleAddToCart(plant)}
            disabled={isInCart(plant.id)}
          >
            {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ));
  };

  return (
    <div className="product-page">
      <h1>Paradise Nursery Plants</h1>

      <section>
        <h2>Indoor Plants</h2>

        <div className="product-grid">
          {renderPlants("Indoor Plants")}
        </div>
      </section>

      <section>
        <h2>Succulents</h2>

        <div className="product-grid">
          {renderPlants("Succulents")}
        </div>
      </section>

      <section>
        <h2>Flowering Plants</h2>

        <div className="product-grid">
          {renderPlants("Flowering Plants")}
        </div>
      </section>
    </div>
  );
}

export default ProductList;