import React from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length === 0) return;

    onClose();
    setTimeout(() => {
      navigate("/payment");
    }, 300);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[90%] md:w-[420px] lg:w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Items List */}
        <div className="p-4 space-y-3 sm:space-y-4 overflow-y-auto max-h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <p className="text-gray-500 text-sm sm:text-base text-center py-8">
              Your cart is empty.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 border rounded-lg p-3 shadow-sm bg-gray-50"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-sm sm:text-base">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    ₹{item.price.toLocaleString()}
                  </p>
                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="mx-3 text-sm sm:text-base">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 self-start sm:self-center"
                  title="Remove item"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          <div className="flex justify-between items-center font-medium text-sm sm:text-base">
            <span className="text-gray-700">Total:</span>
            <span className="text-gray-900">₹{totalPrice.toLocaleString()}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className={`w-full py-2.5 px-4 rounded-lg font-medium transition ${
              items.length === 0
                ? "bg-gray-300 cursor-not-allowed text-gray-500"
                : "bg-teal-600 hover:bg-teal-700 text-white"
            }`}
          >
            Checkout
          </button>
          <button
            onClick={onClose}
            className="w-full text-center text-sm text-gray-600 underline hover:text-gray-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;