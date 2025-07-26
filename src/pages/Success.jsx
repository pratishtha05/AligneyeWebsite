// pages/Success.jsx
import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-3xl font-bold text-teal-600 mb-4">Payment Successful</h1>
      <p className="text-gray-600 mb-6">Thank you for your purchase! Your order is being processed.</p>
      <Link
        to="/"
        className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default Success;
