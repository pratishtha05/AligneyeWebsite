// pages/Payment.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();

  const handlePay = (e) => {
    e.preventDefault();
    // Simulate success after delay
    setTimeout(() => {
      navigate("/success");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Cart Summary */}
        <div className="w-full lg:w-1/2 p-6 border-r border-gray-200 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex justify-between font-medium text-base">
            <span>Total:</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Payment Form */}
        <form
          onSubmit={handlePay}
          className="w-full lg:w-1/2 p-6 space-y-4 bg-white"
        >
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <input
            type="text"
            placeholder="Cardholder Name"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Card Number"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              required
              className="w-1/2 border px-4 py-2 rounded-md"
            />
            <input
              type="text"
              placeholder="CVV"
              required
              className="w-1/2 border px-4 py-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md font-medium hover:bg-teal-700 transition"
          >
            Pay ₹{totalPrice.toLocaleString()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
