import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart, ChevronDown, ChevronUp, Star, Minus, Plus, CheckCircle, ChevronLeft, ChevronRight,} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [mainImage, setMainImage] = useState("/assets/product-main-1.png");
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const sectionRef = useRef(null);

  const product = {
    name: "Posture Corrector Neckband",
    price: 2999,
    originalPrice: 6999,
    discountPercent: 42, // Recalculated (6999-2999)/6999 * 100 = 57.14
    description:
      "A smart neckband that gently corrects your posture—so you don’t have to think about it. Experience discreet, consistent support that adapts to your daily movements, guiding you towards better spinal alignment effortlessly.",
    images: [
      "/assets/product-main-1.png", // Replace with your actual product images
      "/assets/product-main-2.png",
      "/assets/product-main-3.png",
      "/assets/product-main-4.png",
    ],
    reviews: { avg: 4.7, count: 842 },
  };

  const totalPrice = product.price * qty;

  const handleAddToCart = () => {
    addItem({
      id: 1,
      name: product.name,
      price: product.price,
      quantity: qty,
      image: product.images[0],
    });
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        // Show sticky bar when the product info section is scrolled past
        setShowStickyBar(top < -50); // A small offset for better feel
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const carouselItems = [
    {
      title: "Real-Time Posture Feedback",
      description:
        "AlignEye gently vibrates when you slouch, helping you build awareness and naturally realign throughout your day.",
      details:
        "When slouching is detected, AlignEye vibrates lightly to remind you. This promotes subconscious correction and long-term muscle memory.",
      mobileMockupSrc: "/assets/carousel-1.png",
    },
    {
      title: "Activity & Sedentary Tracking",
      description:
        "Understand your daily posture trends, sitting time, and upright streaks via the AlignApp dashboard.",
      details:
        "All movement and stillness is recorded, helping you visualize patterns and adopt healthier routines without manual effort.",
      mobileMockupSrc: "/assets/carousel-2.png",
    },
    {
      title: "AI-Personalized Coaching",
      description:
        "Receive insights, encouragement, and custom challenges to stay aligned, active, and confident throughout your day.",
      details:
        "The AlignApp learns from your posture data and sends smart nudges and progress milestones that evolve with your behavior.",
      mobileMockupSrc: "/assets/carousel-3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev < carouselItems.length ? prev + 1 : prev));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="bg-neutral-950 text-white pt-16 font-sans">
      {/* SECTION 1: Product Overview */}
      <section
        ref={sectionRef}
        className="max-w-6xl mx-auto py-12 sm:py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
      >
        {/* Product Images */}
        <div className="flex flex-col gap-6">
          <div className="relative flex justify-center items-center w-full aspect-square bg-neutral-800 rounded-lg overflow-hidden shadow-sm border border-neutral-700">
            <img
              src={mainImage}
              alt={`${product.name} - ${mainImage}`}
              className="object-contain w-full h-full p-4"
            />
          </div>

          {/* Mobile Thumbnails (lg:hidden) */}
          <div className="flex flex-wrap lg:hidden gap-3 justify-center mt-4">
            {product.images.map((imagePath, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(imagePath)}
                className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
                  mainImage === imagePath
                    ? "border-teal-500 shadow-md"
                    : "border-neutral-700 hover:border-neutral-500"
                } bg-neutral-800`}
              >
                <img
                  src={imagePath}
                  alt={`Thumbnail ${idx + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Desktop Thumbnails (hidden on mobile) */}
          <div className="hidden lg:flex gap-4">
            {product.images.map((imagePath, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(imagePath)}
                className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-md border-2 cursor-pointer transition-all duration-200 ${
                  mainImage === imagePath
                    ? "border-teal-500 shadow-md"
                    : "border-neutral-700 hover:border-neutral-500"
                } bg-neutral-800`}
              >
                <img
                  src={imagePath}
                  alt={`Thumbnail ${idx + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {product.name}
          </h1>

          {/* reviews */}
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                smSize={20}
                fill={
                  i < Math.floor(product.reviews.avg) ? "currentColor" : "none"
                }
                stroke="currentColor"
                className="drop-shadow-sm"
              />
            ))}
            <span className="text-sm sm:text-base text-white font-medium">
              {product.reviews.avg} ({product.reviews.count} reviews)
            </span>
          </div>

          {/* pricing */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <p className="text-2xl sm:text-3xl font-bold text-teal-400">
                ₹{product.price.toLocaleString()}
              </p>
              <p className="line-through text-gray-500 text-base sm:text-lg">
                ₹{product.originalPrice.toLocaleString()}
              </p>
              <span className="text-xs sm:text-sm bg-red-500 text-white font-semibold px-3 py-1 rounded-full border border-red-700 animate-bounce relative">
                {product.discountPercent}% OFF
                <div className="absolute -top-1 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
              </span>
            </div>

            <p className="text-sm text-green-500 font-medium">
              Limited Time Offer – Ends Soon!
            </p>
          </div>

          {/* description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {product.description}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <div className="flex items-center justify-center border border-neutral-700 rounded-lg overflow-hidden shadow-sm w-full sm:w-auto">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="p-2 sm:p-3 hover:bg-neutral-800 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={qty === 1}
              >
                <Minus size={18} />
              </button>
              <span className="px-4 sm:px-5 text-base sm:text-lg font-medium text-white">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="p-2 sm:p-3 hover:bg-neutral-800 text-gray-300 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          <p className="text-base sm:text-lg text-gray-200 font-bold pt-2">
            Total: ₹{totalPrice.toLocaleString()}
          </p>
        </div>
      </section>

      {/* SECTION 2: Key Benefits */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-gray-900">
            Why Aligneye Works
          </h2>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base md:text-lg">
            Thoughtfully engineered to improve your posture without disrupting
            your lifestyle.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Smart Posture Alerts",
                description:
                  "Get gentle haptic feedback whenever you start slouching, encouraging immediate correction.",
                icon: CheckCircle,
              },
              {
                title: "App Connectivity",
                description:
                  "Track posture progress and customize feedback using the intuitive AlignEye app.",
                icon: CheckCircle,
              },
              {
                title: "All-Day Battery",
                description:
                  "10+ hours of active usage to support your posture throughout your workday.",
                icon: CheckCircle,
              },
              {
                title: "Featherlight Design",
                description:
                  "So lightweight and discreet you’ll forget you’re wearing it, perfect for all-day wear.",
                icon: CheckCircle,
              },
              {
                title: "One-Size Fits All",
                description:
                  "Adjustable, ergonomic fit designed for comfort on all body types and sizes.",
                icon: CheckCircle,
              },
              {
                title: "Use It Anywhere",
                description:
                  "Whether you're at your desk, on a walk, or lounging — it works silently in the background.",
                icon: CheckCircle,
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg sm:rounded-xl p-5 hover:cursor-pointer sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-teal-600 mb-2 sm:mb-3">
                  <benefit.icon
                    size={24}
                    smSize={30}
                    className="inline-block"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Real-Life Use Cases */}
      <section className="bg-gray-100 text-gray-900 w-full overflow-hidden pb-16">
        {/* Heading */}
        <div className="text-center px-4 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Designed for <span className="text-teal-600">Your Daily Life</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Whether you're working, walking, relaxing, or creating—Aligneye
            ensures your posture stays aligned without interrupting your flow.
          </p>
        </div>

        {/* Full-Width Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-0">
          {[
            {
              title: "At Work",
              image: "/assets/lifestyle-work.jpg",
              details: [
                "Perfect for long desk sessions",
                "Provides subtle reminders",
                "Improves focus with better posture",
              ],
            },
            {
              title: "On the Move",
              image: "/assets/lifestyle-walk.jpg",
              details: [
                "Tracks posture while walking or commuting",
                "Real-time feedback via AlignApp",
                "Lightweight and discreet fit",
              ],
            },
            {
              title: "At Home",
              image: "/assets/lifestyle-home.jpg",
              details: [
                "Comfortable even while lounging",
                "Encourages relaxation with alignment",
                "Silent nudges for healthy habits",
              ],
            },
            {
              title: "While Creating",
              image: "/assets/lifestyle-create.jpg",
              details: [
                "Great for designers, writers, coders",
                "Posture tracking without interruption",
                "Boosts concentration and clarity",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden hover:cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              {/* Hover Overlay - Hidden by default, appears on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-white max-w-xs sm:max-w-sm space-y-3 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-100 list-disc list-inside leading-relaxed">
                    {item.details.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Title Badge (always visible unless hovered) */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-lg sm:text-xl font-semibold px-4 py-2 rounded shadow-md transition-opacity duration-300 group-hover:opacity-0">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Feature Carousel */}
      <section className="relative w-full h-[80vh] min-h-[500px] bg-neutral-950 text-white overflow-hidden">
        {/* Intro Slide */}
        {currentIndex === 0 && (
          <motion.div
            key="intro-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col h-full justify-center items-center px-4 sm:px-6 text-center"
          >
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              <div className="bg-white text-black rounded-full p-3 sm:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 sm:h-8 w-6 sm:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Explore What AlignEye Can Do
              </h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-md sm:max-w-xl">
                AlignEye isn’t just a neckband — it’s a smart, wearable system
                designed to improve your posture effortlessly through intuitive
                features and seamless feedback.
              </p>
              <button
                onClick={goNext}
                className="bg-teal-600 hover:bg-teal-700 hover:cursor-pointer text-white font-medium px-6 py-3 rounded-md text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Next →
              </button>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-6 flex gap-3">
              {[...Array(carouselItems.length + 1)].map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full ${
                    idx === currentIndex
                      ? "bg-white"
                      : "bg-neutral-700 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Feature Slides */}
        {currentIndex > 0 && (
          <div className="min-h-[80vh] flex items-center py-10 px-4">
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16">
              <AnimatePresence mode="wait">
                {/* Left Text Content */}
                <motion.div
                  key={`text-${currentIndex}`}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 max-w-xl text-center lg:text-left"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
                    {carouselItems[currentIndex - 1].title}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                    {carouselItems[currentIndex - 1].description}
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                    <button
                      onClick={goPrev}
                      className="bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer text-white py-2 px-5 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition duration-300 border border-neutral-700"
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={goNext}
                      className="bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer text-white py-2 px-5 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition duration-300 border border-neutral-700"
                    >
                      Next →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Dots */}
            <div className="absolute bottom-6 w-full flex justify-center gap-3">
              {[...Array(carouselItems.length + 1)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition duration-300 shadow-md ${
                    idx === currentIndex
                      ? "bg-teal-500 scale-125"
                      : "bg-neutral-700 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* SECTION 5: Technical Specifications */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Column: Intro */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Precision-Engineered for{" "}
              <span className="text-teal-600">Everyday Comfort</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Every detail of the Aligneye neckband is built with your comfort
              and alignment in mind — from feather-light materials to smart
              motion sensors. Here's a look under the hood.
            </p>
          </div>

          {/* Right Column: Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6 text-base">
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Battery Life</p>
              <p className="text-gray-600">Up to 10 hours on a single charge</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Material</p>
              <p className="text-gray-600">
                Soft-touch silicone, skin-safe coating
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Sensors</p>
              <p className="text-gray-600">
                Dual-axis gyro & posture detection unit
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Connectivity</p>
              <p className="text-gray-600">
                Bluetooth 5.0 – seamless sync with app
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Weight</p>
              <p className="text-gray-600">
                Only 52 grams – forget you’re wearing it
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Haptics</p>
              <p className="text-gray-600">
                Subtle vibration feedback – 3 adjustable modes
              </p>
            </div>
          </div>
        </div>
        {/*more textual info */}
        <div className="text-black mt-10 mr-10 ml-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quos
          facere enim tempore consequuntur aut nostrum quas inventore quasi.
          Voluptas pariatur vel dolores ipsum et, odio laboriosam nemo nobis
          molestiae debitis minus eos ducimus deserunt aperiam laudantium nam
          unde architecto cum maiores repellat non? Debitis possimus asperiores
          officiis consectetur quia cupiditate blanditiis quas enim aliquam
          fugit minus earum perferendis quod minima impedit molestiae inventore
          ullam deserunt optio magnam aperiam rem, accusantium officia?
          Accusantium odit voluptatibus aperiam, quas nesciunt fugiat ad itaque
          id quod iste illo officiis soluta eaque dolorum officia quisquam dolor
          quaerat fuga voluptates voluptatem sequi beatae! Ab, quod?
        </div>
      </section>

      {/* SECTION 6: Testimonials */}
      <section className="relative bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            What <span className="text-teal-600">Our Users</span> Say
          </h2>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base md:text-lg">
            Real stories from real people who improved their posture with
            Aligneye.
          </p>

          {/* Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={12}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
              breakpoints={{
                // Mobile: 1 slide
                640: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                // Tablet: 2 slides
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                // Desktop: 3+ slides
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="pb-10"
            >
              {[
                {
                  quote:
                    "AlignEye has helped me stay focused while working from home. I don’t even realize I’m wearing it—yet my posture has never been better.",
                  name: "Aarav Mehta",
                  title: "Product Designer",
                  avatar: "/assets/avatar1.jpg",
                },
                {
                  quote:
                    "As a medical student, I sit for long hours. AlignEye gently nudges me to straighten up without distraction. Game changer!",
                  name: "Sneha Kapoor",
                  title: "MBBS Student",
                  avatar: "/assets/avatar2.jpg",
                },
                {
                  quote:
                    "After trying multiple devices, AlignEye finally worked. It’s minimal, smart, and doesn’t need constant attention.",
                  name: "Rahul Bansal",
                  title: "Freelance Developer",
                  avatar: "/assets/avatar3.jpg",
                },
                {
                  quote:
                    "Was skeptical at first, but AlignEye actually improved my back posture while gaming. Feels natural now.",
                  name: "Kabir Singh",
                  title: "Streamer & Gamer",
                  avatar: "/assets/avatar4.jpg",
                },
              ].map((t, idx) => (
                <SwiperSlide key={idx}>
                  <div className="h-[240px] sm:h-[250px] md:h-[260px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between">
                    {/* Quote */}
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base italic leading-relaxed line-clamp-4">
                      “{t.quote}”
                    </p>

                    {/* User Info */}
                    <div className="mt-3 flex items-center gap-2 sm:gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-gray-300 ring-1 ring-gray-200"
                      />
                      <div className="text-left">
                        <h4 className="text-gray-900 font-semibold text-xs sm:text-sm md:text-base">
                          {t.name}
                        </h4>
                        <span className="text-xs text-gray-500">{t.title}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows - Visible on All Devices */}
            <button className="testimonial-prev hover:cursor-pointer absolute top-1/2 -left-2 sm:-left-3 md:-left-4 transform -translate-y-1/2 z-10 bg-white p-1.5 sm:p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 active:scale-95 transition-all duration-200 focus:outline-none">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
            <button className="testimonial-next hover:cursor-pointer absolute top-1/2 -right-2 sm:-right-3 md:-right-4 transform -translate-y-1/2 z-10 bg-white p-1.5 sm:p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 active:scale-95 transition-all duration-200 focus:outline-none">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: Frequently Asked Questions */}
      <section className="bg-gray-100 mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-10 text-center text-teal-600">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          {[
            {
              q: "How do they help with posture?",
              a: "They detect slouching and give you gentle haptic reminders to correct your posture—subtle yet effective. This active feedback helps build muscle memory over time.",
            },
            {
              q: "Is there an app?",
              a: "Yes, the Aligneye app connects via Bluetooth to display posture data and allows customization of feedback intensity and alert frequency. Available for iOS and Android.",
            },
            {
              q: "Battery life?",
              a: "Up to 10 hours of active use on a single charge, with quick-charging capabilities for on-the-go convenience. A full charge takes approximately 90 minutes.",
            },
            {
              q: "What is the return policy?",
              a: "We offer a hassle-free 7-day easy return policy. If you're not satisfied, simply return the product within 7 days for a full refund. Conditions apply.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left text-gray-800 font-semibold bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base md:text-lg"
              >
                <span className="pr-4">{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp
                    size={20}
                    className="text-teal-600 transform transition-transform"
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-gray-500 transform transition-transform rotate-180"
                  />
                )}
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-5 sm:px-6 pb-5 text-gray-600 bg-white text-sm sm:text-base leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: Guarantee & Trust */}
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 sm:mb-12">
            Your Trust, Our Promise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="space-y-2 flex flex-col items-center">
              <div className="text-teal-600 text-3xl sm:text-4xl font-bold mb-2">
                7-Day
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-semibold px-2 sm:px-4">
                Easy Return Policy
              </p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="text-teal-600 text-3xl sm:text-4xl font-bold mb-2">
                6-Month
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-semibold px-2 sm:px-4">
                Replacement Warranty
              </p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="text-teal-600 text-3xl sm:text-4xl font-bold mb-2">
                100%
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-semibold px-2 sm:px-4">
                Physio-Approved Design
              </p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="text-teal-600 text-3xl sm:text-4xl font-bold mb-2">
                Made in 🇮🇳
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-semibold px-2 sm:px-4">
                Designed & Built in India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 w-full bg-white shadow-2xl py-3 px-4 sm:px-6 lg:px-12 z-50 border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
              {/* Product Info (horizontal on mobile) */}
              <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6 w-full sm:w-auto text-center sm:text-left">
                <h3 className="text-sm font-bold text-gray-800 truncate flex-1 text-left">
                  {product.name}
                </h3>
                <span className="text-base sm:text-lg font-bold text-teal-600 whitespace-nowrap">
                  ₹{totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105"
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Confirmation Toast */}
            <AnimatePresence>
              {showConfirmation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 whitespace-nowrap"
                >
                  <CheckCircle size={18} />
                  <span>Item Added!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
