import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🌱</h2>

          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="150"
                height="150"
              />

              <div>
                <h2>{item.name}</h2>

                <p>
                  Unit Price: ${item.price.toFixed(2)}
                </p>

                <p>
                  Total Cost: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <div>
                  <button
                    onClick={() => handleDecrease(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>

                  <span> {item.quantity} </span>

                  <button onClick={() => handleIncrease(item)}>
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>
              Total Cart Amount: ${totalAmount.toFixed(2)}
            </h2>

            <button
              onClick={() => alert("Checkout Coming Soon!")}
            >
              Checkout
            </button>

            <button onClick={onContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;