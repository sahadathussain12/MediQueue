
"use client";

import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
} from "react-icons/fa6";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    title: "Find the Right Tutor for Your Learning Journey",
    description:
      "Connect with experienced tutors and get personalized learning support to achieve your academic goals.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    title: "Learn From Experienced Tutors",
    description:
      "Discover skilled tutors who can help you improve your knowledge, skills, and confidence.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    title: "Make Every Learning Session Count",
    description:
      "Book learning sessions, connect with tutors, and make your learning experience easier and more effective.",
  },
];

export default function Benner() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };


  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  w-full overflow-hidden  bg-gray-950">

      {/* ================= Slider ================= */}
      <div className="relative h-[520px]  sm:h-[560px] lg:h-[600px] ">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentSlide === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >

            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="absolute inset-0">

              <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                <div className="max-w-3xl text-white">

                  {/* Small Badge */}
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">

                    <FaGraduationCap size={15} />

                    <span>
                      Learn Better. Grow Faster.
                    </span>

                  </div>


                  {/* Heading */}
                  <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

                    {slide.title}

                  </h1>


                  {/* Description */}
                  <p className="mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">

                    {slide.description}

                  </p>


                  {/* CTA */}
                  <div className="mt-8">

                    <a
                      href="/tutors"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 hover:shadow-lg"
                    >
                      Explore Tutors

                      <FaArrowRight size={14} />

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>
        ))}


        {/* ================= Previous Button ================= */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900 sm:left-5 sm:h-12 sm:w-12"
        >
          <FaChevronLeft size={17} />
        </button>


        {/* ================= Next Button ================= */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900 sm:right-5 sm:h-12 sm:w-12"
        >
          <FaChevronRight size={17} />
        </button>


        {/* ================= Dots ================= */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">

          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}

        </div>


        {/* ================= Slide Counter ================= */}
        <div className="absolute bottom-6 right-4 z-20 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:right-8">
          {currentSlide + 1} / {slides.length}
        </div>

      </div>

    </section>
  );
}

