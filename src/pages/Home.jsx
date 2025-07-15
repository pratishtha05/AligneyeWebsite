import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Play,
  Plus,
  ShieldCheck,
  Truck,
  RotateCcw,
  FolderSync,
  Bluetooth,
  BatteryFull,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import StickySidebar from "../components/StickySidebar.jsx";
import ChatBot from "../components/ChatBot.jsx";

import product from "../assets/product_image.png";
import img1 from "../assets/realTimeTracking.png";
import img2 from "../assets/training.png";
import aligneyeProductImage from "../assets/product_.png";
import bgImage from "../assets/background.png";

const Home = () => {
  // Product features
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  const featureClass = (inView) =>
    `transition-all duration-1000 ease-out ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  const featureData = [
    {
      id: 1,
      icon: FolderSync,
      title: "Data Sync & Progress Tracking",
      description:
        "Automatically syncs posture data across devices and visualizes your improvement trends over time in the app.",
      position: "left-5 top-1/4 -translate-y-1/2 text-left items-end ml-10",
    },
    {
      id: 2,
      icon: Bluetooth,
      title: "Powered by Bluetooth 5.2",
      description:
        "Enhanced range, stability, and energy efficiency with advanced Bluetooth 5.2 — for seamless posture feedback across devices.",
      position: "right-10 top-1/4 -translate-y-1/2 text-left items-start",
    },
    {
      id: 3,
      icon: BatteryFull,
      title: "Uninterrupted All-Day Power",
      description:
        "Enjoy extended usage with a long-lasting battery, keeping you aligned throughout your busiest days.",
      position: "bottom-15 left-1/2 -translate-x-1/2 text-left items-center",
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: "Integrated Multi-Function Controls",
      description:
        "Easily switch modes, control feedback, or power the device with a single intuitive button—no app required.",
      position: "left-5 bottom-50 text-left items-end ml-10",
    },
    {
      id: 5,
      icon: RotateCcw,
      title: "Vibrotactile Feedback",
      description:
        "Delivers gentle vibration alerts to guide posture correction without disrupting your workflow.",
      position: "right-10 bottom-50 text-left items-start",
    },
    {
      id: 6,
      icon: Truck,
      title: "Smart IMU Sensor",
      description:
        "Built-in 9-axis IMU sensor delivers precise motion tracking for real-time posture correction and detailed movement analytics.",
      position: "top-0 left-1/2 -translate-x-1/2 text-left items-center",
    },
  ];

  // Working steps
  const steps = [
    {
      id: "01",
      title: "Wear & Connect",
      description:
        "Slip on the AlignEye neckband and sync it with your mobile app in seconds.",
      // img: imgStep1,
      reverse: false,
    },
    {
      id: "02",
      title: "Track in Real Time",
      description:
        "Sit, stand, or move — AlignEye gently corrects posture as you go.",
      // img: imgStep2,
      reverse: true,
    },
    {
      id: "03",
      title: "Improve Consistently",
      description:
        "Train muscle memory and see lasting changes with daily micro-reminders.",
      // img: imgStep3,
      reverse: false,
    },
  ];

  // App features
  const featureCards = [
    {
      id: 1,
      // image: appGraphImage,
      title: "1000+ Exercises",
      description:
        "Access a vast library of posture-improving exercises tailored to different body types, needs, and fitness levels.",
    },
    {
      id: 2,
      // image: doctorImage,
      title: "20+ Sports Mode",
      description:
        "Track posture dynamics across 20+ sports and activities—from running to cycling—with mode-specific insights.",
    },
    {
      id: 3,
      // image: privacyImage,
      title: "Personalised Progress Report",
      description:
        "Receive detailed posture reports and real-time feedback, helping you measure improvement and stay motivated.",
    },
    {
      id: 4,
      // image: connectivityImage,
      title: "Community & Badges",
      description:
        "Join a growing community, unlock achievement badges, and stay engaged as you improve your posture journey.",
    },
  ];

  // testimonials
  const testimonials = [
    {
      id: 1,
      avatar: "https://placehold.co/100x100/000000/FFFFFF?text=User1", // Placeholder image
      text: "Aligneye has been a game-changer for my desk posture! My back pain has significantly reduced, and I feel more energetic throughout the day. Highly recommend this app!",
      name: "Emily R.",
      rating: 5,
      type: "user",
    },
    {
      id: 2,
      avatar: "https://placehold.co/100x100/000000/FFFFFF?text=Expert1", // Placeholder image
      text: "As a chiropractor, I'm genuinely impressed by Aligneye's comprehensive approach to posture correction. It's an excellent, evidence-based tool for clients seeking long-term spinal health and preventive care.",
      name: "Dr. Alex Chen",
      designation: "Chiropractor",
      rating: 5,
      type: "expert",
    },
    {
      id: 3,
      avatar: "https://placehold.co/100x100/000000/FFFFFF?text=User2", // Placeholder image
      text: "I used to slouch terribly, but Aligneye's personalized exercises and real-time feedback made a significant difference. My confidence has boosted along with my posture!",
      name: "Mark T.",
      rating: 4,
      type: "user",
    },
    {
      id: 4,
      avatar: "https://placehold.co/100x100/000000/FFFFFF?text=User3", // Placeholder image
      text: "The real-time feedback is invaluable. Aligneye isn't just an app; it's like having a personal posture coach. Seeing my daily progress keeps me incredibly motivated.",
      name: "Sarah L.",
      rating: 5,
      type: "user",
    },
    {
      id: 5,
      avatar: "https://placehold.co/100x100/000000/FFFFFF?text=Expert2", // Placeholder image
      text: "Aligneye seamlessly integrates cutting-edge AI with practical, easy-to-follow exercises. It represents a significant advancement in wearable health technology for effective posture improvement.",
      name: "Prof. David Lee",
      designation: "Biomechanics Researcher",
      rating: 5,
      type: "expert",
    },
    {
      id: 6,
      avatar: "https://placehold.co/100x100/000000/FFFFFF?text=User4", // Placeholder image
      text: "After just a few weeks, I noticed a profound improvement in my posture. The variety of exercises keeps things fresh and engaging. Truly effective and highly recommended!",
      name: "Jessica P.",
      rating: 4,
      type: "user",
    },
    {
      id: 7,
      avatar: "https://placehold.co/100x100/000000/FFFFFF?text=User5", // Placeholder image
      text: "My posture was a mess from years of desk work. Aligneye's gentle reminders and targeted exercises have made a huge difference. I feel taller and more aligned!",
      name: "David K.",
      rating: 5,
      type: "user",
    },
    {
      id: 8,
      avatar: "https://placehold.co/100x100/000000/FFFFFF?text=Expert3", // Placeholder image
      text: "From a physical therapy perspective, Aligneye offers a robust and user-friendly platform for patients to engage in their posture rehabilitation at home. Its data tracking is particularly useful.",
      name: "Dr. Lena Park",
      designation: "Physical Therapist",
      rating: 5,
      type: "expert",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        // Filled star character
        stars.push(
          <span key={i} className="text-yellow-400 text-xl">
            &#9733;
          </span>
        );
      } else {
        // Empty star character
        stars.push(
          <span key={i} className="text-gray-700 text-xl">
            &#9733;
          </span>
        );
      }
    }
    return <div className="flex justify-center mb-3">{stars}</div>;
  };

  return (
    <div className=" min-h-screen">
      {/* sticky sidebar for socials */}
      <StickySidebar />

      {/* chatbot */}
      <ChatBot />

      {/* section1: hero section */}
      <section
        className="relative z-10 px-6 pt-25 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                  Posture. Redefined.
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
                  Transform Your Posture.
                </h1>

                <p className="  text-gray-300 ">
                  With AlignEye’s posture corrector neckband, align your body
                  and elevate your presence—wherever life takes you.
                </p>
              </div>

              <div className="flex flex-row flex-wrap items-center gap-4 mt-4">
                <Link
                  to="/product"
                  className="bg-teal-600 text-white font-medium px-6 py-3 rounded-full hover:bg-teal-500 hover:cursor-pointer transition-transform hover:scale-105"
                >
                  Shop Now
                </Link>
                <Link
                  to="/working"
                  className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white hover:text-black hover:cursor-pointer transition-transform hover:scale-105"
                >
                  How It Works
                </Link>
              </div>
            </div>

            {/* Right - Product */}
            <div className="flex justify-center m-0 ">
              <img src={product} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* section2: overall features and video section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 md:py-20 text-black bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="space-y-6 mb-12 text-center md:text-left">
            <div className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              Designed for Ease. Built for You.
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Experience the Difference
              <span className="block text-teal-600">With AlignEye</span>
            </h2>
          </div>

          {/* Video Placeholder */}
          <div className="relative bg-black rounded-3xl overflow-hidden aspect-video mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex items-center space-x-4 text-white hover:text-teal-400 transition-colors duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>
              </button>
            </div>
          </div>

          {/* Card Grid: Each card contains image + feature */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                img: img1,
                tag: "Personalized Posture Guidance",
                title: "SMART COACH",
                desc: "An AI-powered coach that adapts to your behavior and gently trains you to improve over time.",
              },
              {
                img: img2,
                tag: "Posture Tracking On the Go",
                title: "SMART WALK",
                desc: "Monitors your walking posture and provides instant haptic feedback to keep you aligned throughout the day.",
              },
              {
                img: img2,
                tag: "Mind-Body Posture Sync",
                title: "SMART MEDITATION",
                desc: "Enhance your meditation with posture-aware breathing sessions and gentle alignment reminders.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src={item.img}
                    alt={`feature-img-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Feature Text */}
                <div className="p-6 space-y-3 text-center md:text-left">
                  <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
                    {item.tag}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              to="/product"
              className="bg-teal-500 hover:bg-teal-600 hover:cursor-pointer text-white font-medium px-10 sm:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* section3: device main features */}
      <section className="bg-black py-20 text-white min-h-screen flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-extrabold leading-tight mb-4">
            <span>Finally, </span>
            <span className="text-teal-500">Posture</span> That Lasts. For{" "}
            <span className="text-teal-500">You.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Designed for real results, not just reminders.
          </p>
        </div>

        {/* Desktop: Feature around product image */}
        <div className="hidden md:flex relative w-full max-w-7xl aspect-[16/9] mx-auto items-center justify-center">
          <img
            src={aligneyeProductImage}
            alt="Aligneye Posture Corrector Product"
            className="relative z-10 w-full max-h-[400px] object-contain pt-5 mb-20"
          />

          {featureData.map((feature, index) => (
            <div
              key={feature.id}
              ref={[ref1, ref2, ref3, ref4, ref5, ref6][index] ?? null}
              className={`absolute max-w-[400px] w-full px-4 ${
                feature.position
              } ${featureClass(
                [inView1, inView2, inView3, inView4, inView5, inView6][index] ??
                  true
              )}`}
            >
              <div className="flex items-start space-x-4">
                {React.createElement(feature.icon, {
                  className: "text-teal-400 flex-shrink-0 mt-1",
                  size: 32,
                  strokeWidth: 1.5,
                })}
                <div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                  <div className="w-20 h-0.5 bg-gray-500 mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Stack product image and feature cards */}
        <div className="md:hidden w-full max-w-md px-6 space-y-10">
          <motion.img
            src={aligneyeProductImage}
            alt="AlignEye Product"
            className="w-full max-h-[300px] object-contain mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          {featureData.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {React.createElement(feature.icon, {
                className: "text-teal-400 flex-shrink-0 mt-1",
                size: 28,
                strokeWidth: 1.5,
              })}
              <div>
                <h3 className="text-base font-bold">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
                <div className="w-16 h-0.5 bg-gray-600 mt-2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* section divider */}
      <div className="w-full h-0.5 bg-neutral-800 mx-auto"></div>

      {/* section4: Working  */}
      <section className="bg-neutral-950 py-16 px-6 space-y-24">
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Just <span className="text-teal-500">3</span> Simple Steps..
          </h2>
        </div>

        {steps.map(({ id, title, description, img, reverse }) => (
          <div
            key={id}
            className={`
              flex flex-col-reverse ${
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }
              items-center justify-between
              max-w-6xl mx-auto px-4 sm:px-8 py-10 gap-10
            `}
          >
            {/* Text */}
            <div className="w-full md:w-1/2 text-white text-left">
              <p className="text-5xl font-extrabold text-gray-300 mb-4 opacity-80">
                {id}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
              <p className="text-gray-400 text-base md:text-lg mb-6 max-w-md">
                {description}
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-teal-500 hover:text-white transition-all duration-300">
                Explore More
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={img}
                alt={`Step ${id}`}
                className="w-full h-auto object-contain rounded-xl shadow-xl"
              />
            </div>
          </div>
        ))}
      </section>

      {/* section5: About the App */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-20 gap-8 md:gap-0">
            {/* Heading */}
            <div className="md:w-2/3 text-left space-y-4">
              <p className="text-gray-600">
                <span className="text-teal-600">|</span> Always with you
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                All Your Posture Insights. <br />
                <span className="text-teal-600">One Powerful App.</span>
              </h2>
            </div>

            {/* Subtext */}
            <div className="md:w-1/3 text-left">
              <p className="text-gray-700 text-base sm:text-lg">
                Get a clear view of your alignment history, receive posture
                coaching, and set long-term goals — all in the easy-to-use
                Aligneye App.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48 sm:h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-gray-800 text-white p-2 rounded-full z-10">
                    <Plus size={20} />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section6: Community testimonials + CTA */}
      <section className="bg-black py-24 px-4 text-white relative z-10 overflow-hidden font-inter">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Unlocking Better Posture: Our{" "}
            <span className="text-teal-400">Proven Impact</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the transformative power of Aligneye, validated by
            science and celebrated by a thriving community.
          </p>
        </div>

        {/* Clinical Proof Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 px-2">
          {/* Left Text */}
          <div className="text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              <span className="text-teal-400">The Science</span> Behind Your
              Transformation
            </h3>
            {/* Mobile short text */}
            <p className="text-gray-300 text-base leading-relaxed block sm:hidden">
              A clinically validated wearable developed with experts to improve
              posture—backed by real results.
            </p>

            {/* Full text for tablet/desktop */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed hidden sm:block">
              Aligneye isn’t just another wearable—it’s a clinically validated
              posture correction solution developed in collaboration with
              orthopedic specialists, physiotherapists, and data scientists.
              Every feature is rooted in research and designed to deliver
              visible, lasting improvement.
            </p>

            <ul className="space-y-4">
              {[
                {
                  icon: (
                    <CheckCircle className="text-teal-400 w-6 h-6 mt-1 mr-4" />
                  ),
                  text: (
                    <>
                      <span className="text-white font-semibold">
                        Clinically tested
                      </span>{" "}
                      to improve postural symmetry by up to{" "}
                      <span className="text-teal-400 font-semibold">90%</span>.
                    </>
                  ),
                },
                {
                  icon: (
                    <CheckCircle className="text-teal-400 w-6 h-6 mt-1 mr-4" />
                  ),
                  text: (
                    <>
                      <span className="text-white font-semibold">
                        75% of users
                      </span>{" "}
                      report reduced neck and back pain within{" "}
                      <span className="text-teal-400 font-semibold">
                        just 3 weeks
                      </span>
                      .
                    </>
                  ),
                },
                {
                  icon: (
                    <CheckCircle className="text-teal-400 w-6 h-6 mt-1 mr-4" />
                  ),
                  text: (
                    <>
                      Developed with insights from{" "}
                      <span className="text-white font-semibold">
                        orthopedic doctors
                      </span>
                      ,{" "}
                      <span className="text-white font-semibold">
                        physical therapists
                      </span>
                      , and{" "}
                      <span className="text-white font-semibold">
                        biomechanics researchers
                      </span>
                      .
                    </>
                  ),
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-base sm:text-lg text-gray-300 leading-relaxed"
                >
                  <span className="mr-4">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center items-center p-6 bg-neutral-900 rounded-3xl shadow-xl border border-neutral-700">
            <svg
              className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 text-teal-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-neutral-800 mx-auto"></div>

        {/* Real User Feedback */}
        <div className="text-center mb-16 mt-24 px-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Stories of <span className="text-teal-500">Real</span> Change
          </h3>
          {/* Mobile Short Text */}
          <p className="text-gray-400 text-base leading-relaxed block sm:hidden max-w-xl mx-auto">
            See how real users improved their posture and confidence with
            Aligneye.
          </p>

          {/* Desktop Full Text */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed hidden sm:block max-w-2xl mx-auto">
            Join the ones who have rediscovered comfort, confidence, and better
            health. These are their journeys with Aligneye.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="w-full max-w-7xl mx-auto pb-16"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {testimonials
            .filter((item) => item.type === "user")
            .map((item) => (
              <SwiperSlide
                key={item.id}
                className="bg-neutral-800 rounded-3xl border-b-4 border-teal-600 shadow-xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-teal-600 min-h-[350px] justify-between"
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 border-4 border-teal-600 shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x100/000000/FFFFFF?text=Avatar";
                  }}
                />
                {renderStars(item.rating)}
                <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow leading-relaxed">
                  "{item.text}"
                </p>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-purple-200">
                    {item.name}
                  </h4>
                  {item.designation && (
                    <p className="text-sm text-teal-300 mt-1">
                      {item.designation}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>

      <div className="w-full h-0.5 bg-neutral-800 mx-auto"></div>

      {/* section7: Pricing & Final CTA */}
      <section className="bg-neutral-950 py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={aligneyeProductImage}
              alt="Aligneye Device"
              className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Pricing & CTA */}
          <div className="w-full lg:w-1/2 text-white text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Invest in <span className="text-teal-500">Yourself.</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl">
              Aligneye gives you the power to monitor, correct, and sustain your
              posture—all from one intelligent device. Compact, comfortable, and
              designed to work with your day.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              {/* Original Price */}
              <div className="text-lg sm:text-xl text-gray-400 line-through">
                ₹6,999
              </div>

              {/* Offer Price */}
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                ₹2,999
              </div>

              {/* Discount Badge */}
              <div className="relative flex items-center">
                <div className="bg-teal-500 text-black font-semibold text-sm px-3 py-1 rounded-full animate-bounce">
                  42% OFF
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
              </div>

              {/* Tax Note */}
              <div className="text-sm text-gray-400 w-full">
                Inclusive of all taxes
              </div>
            </div>

            <Link
              to="/product"
              className="bg-teal-500 hover:bg-teal-400 text-black hover:cursor-pointer font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300"
            >
              Shop Now
            </Link>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
              <div className="flex items-center gap-3 text-gray-400">
                <ShieldCheck className="w-6 h-6 text-teal-500" />
                <span>1-Year Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Truck className="w-6 h-6 text-teal-500" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <RotateCcw className="w-6 h-6 text-teal-500" />
                <span>7-Day Return Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section8: Final CTA Section */}
      <section className="relative w-full bg-[#F9FAFB] text-black py-32 px-6 md:px-12 overflow-hidden">
        {/* Background Glow Blob */}
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-teal-400 to-transparent opacity-20 blur-[120px] rounded-full z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            It’s Time to <span className="text-teal-600">Realign.</span>
          </motion.h2>

          {/* Subtext - Mobile (Short) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-xl mx-auto block md:hidden"
          >
            Your daily companion to feel better, stand taller, and stay aligned
            from Day 1.
          </motion.p>

          {/* Subtext - Desktop (Full) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto hidden md:block"
          >
            Not just a posture tracker — it’s your daily companion in building
            long-term body awareness. Feel the difference in your focus, energy,
            and confidence starting Day 1.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center gap-4 w-full px-4"
          >
            <Link
              to="/product"
              className="bg-teal-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:cursor-pointer hover:bg-teal-700 transition"
            >
              Shop Now →
            </Link>

            <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded-full text-sm font-medium hover:border-teal-500 hover:text-teal-600 hover:cursor-pointer transition">
              Explore More
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
