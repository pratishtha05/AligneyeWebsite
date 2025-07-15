import React from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    alert("Order placed successfully!");
    // ✅ No clearCart here
    onClose(); // Still close the sidebar
  };

  return (
    <>
      {/* Overlay to detect outside clicks */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Items */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border rounded-lg p-3 shadow-sm bg-gray-50"
              >
                <div className="flex flex-col">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 text-gray-600 text-lg"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 text-gray-600 text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove item"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between font-medium">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
          >
            Checkout
          </button>
          <button
            onClick={onClose}
            className="w-full text-sm text-gray-600 underline"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
