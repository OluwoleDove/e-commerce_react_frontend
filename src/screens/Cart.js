import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from backend or local storage
  useEffect(() => {
    // Fetch cart items from backend or local storage
    const fetchCartItems = async () => {
      try {
        // Example: Fetch cart items from an API endpoint
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.log('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Increment item quantity
  const incrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Decrement item quantity
  const decrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Render cart items
  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {renderCartItems()}
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
};

export default Cart;
