import React, { useState, useRef, useEffect } from "react";
import {
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Star,
  Minus,
  Plus,
  CheckCircle,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [mainImage, setMainImage] = useState("Image 1");
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const sectionRef = useRef(null);

  const product = {
    name: "Posture Corrector Neckband",
    price: 2999,
    originalPrice: 6999,
    discountPercent: 42,
    description:
      "A smart neckband that gently corrects your posture—so you don’t have to think about it.",
    images: ["Image 1", "Image 2", "Image 3", "Image 4"],
    reviews: { avg: 4.7, count: 842 },
    faqs: [
      {
        q: "How do they help with posture?",
        a: "They detect slouching and give you gentle haptic reminders to correct your posture—subtle yet effective.",
      },
      {
        q: "Is there an app?",
        a: "Yes, the Aligneye app connects via Bluetooth to display posture data and allows customization of feedback.",
      },
      {
        q: "Battery life?",
        a: "Up to 10 hours of active use, plus quick-charging for on-the-go convenience.",
      },
    ],
  };

  const totalPrice = product.price * qty;

  const handleAddToCart = () => {
    addItem({
      id: 1,
      name: product.name,
      price: product.price,
      quantity: qty,
    });
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        setShowStickyBar(top < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 pt-20">
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-6">
          <div className="relative flex justify-center items-center w-full aspect-square bg-gray-100 rounded-lg shadow border">
            <span className="text-gray-600 text-lg">{mainImage}</span>
          </div>

          {/* Mobile Thumbnail Slider */}
          <div className="flex lg:hidden mt-4 gap-3 overflow-x-auto">
            {product.images.map((label, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(label)}
                className={`w-20 h-20 flex-shrink-0 rounded-md flex items-center justify-center text-xs font-medium text-gray-600 border-2 cursor-pointer transition ${
                  mainImage === label ? "border-teal-600" : "border-transparent"
                } bg-gray-200`}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Desktop Vertical Thumbnails */}
          <div className="hidden lg:flex gap-3">
            {product.images.map((label, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(label)}
                className={`w-20 h-20 flex items-center justify-center text-xs font-medium text-gray-600 rounded-md border-2 cursor-pointer transition ${
                  mainImage === label ? "border-teal-600" : "border-transparent"
                } bg-gray-200`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={
                  i < Math.floor(product.reviews.avg) ? "currentColor" : "none"
                }
                stroke="currentColor"
              />
            ))}
            <span className="text-sm text-gray-600">
              {product.reviews.avg} ({product.reviews.count} reviews)
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center flex-wrap gap-3">
              <p className="text-xl sm:text-2xl font-bold text-teal-600">
                ₹{product.price.toLocaleString()}
              </p>
              <p className="line-through text-gray-400 text-lg">
                ₹{product.originalPrice.toLocaleString()}
              </p>
              <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-1 rounded-full">
                {product.discountPercent}% OFF
              </span>
            </div>
            <p className="text-sm font-medium text-green-700">
              Limited Time Offer – Ends Soon!
            </p>
          </div>

          <p className="text-sm sm:text-base text-gray-700">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Minus />
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Plus />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          <p className="text-md text-gray-700 font-medium">
            Total: ₹{totalPrice.toLocaleString()}
          </p>

          <div className="space-y-4 border-t pt-6">
            {product.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 font-medium text-left"
                >
                  {faq.q}
                  {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFaq === index && (
                  <div className="p-4 text-gray-700">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-sm sm:text-base">
        <h2 className="text-2xl font-bold mb-4">More About Aligneye</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
          auctor lacus...
        </p>
        <p className="text-gray-600 leading-relaxed">
          Vestibulum tincidunt ut est sit amet placerat. Morbi luctus sit amet
          tortor...
        </p>
      </section>

      {/* Spacer */}
      <div className="h-[600px] bg-gray-50"></div>

      {/* Sticky Add to Cart Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-4 px-4 sm:px-6 lg:px-12 z-40 border-t border-gray-200 animate-slide-up">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-gray-800">
                {product.name}
              </h3>
              <span className="text-md sm:text-lg font-medium text-teal-600">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm sm:text-md font-semibold shadow hover:bg-teal-700 hover:cursor-pointer transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          {showConfirmation && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow animate-fade-in whitespace-nowrap">
              <CheckCircle size={16} className="inline-block mr-1" /> Added!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
