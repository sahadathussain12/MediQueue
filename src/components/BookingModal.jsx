"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

const BookingModal = ({ tutor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme check
  const isDark = mounted && resolvedTheme === "dark";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const bookingData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        tutorId: tutor?._id,
        tutorName: tutor?.tutorName,
        subject: tutor?.subject,
        hourlyFee: tutor?.hourlyFee,
      };

      console.log("Booking Data:", bookingData);

      // পরে এখানে backend API call করবে

      toast.success("Booking confirmed successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
      });

      setIsOpen(false);
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =========================
          BOOK BUTTON
      ========================== */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
      >
        Book This Tutor
      </button>

      {/* =========================
          MODAL
      ========================== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-[2px]">
          
          {/* Modal */}
          <div
            className={`relative w-full max-w-sm rounded-xl border p-5 shadow-2xl ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full transition ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                  : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              <FaXmark size={14} />
            </button>

            {/* Header */}
            <div className="text-center">
              <h2
                className={`text-lg font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Book Session
              </h2>

              <p
                className={`mt-2 text-[11px] leading-4 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Make changes to your booking here. Click confirm when you're
                done.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`mb-1.5 block text-xs font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full rounded-lg border px-3 py-2 text-xs outline-none transition ${
                    isDark
                      ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                      : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
                  } focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className={`mb-1.5 block text-xs font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01XXX-XXXXXX"
                  className={`w-full rounded-lg border px-3 py-2 text-xs outline-none transition ${
                    isDark
                      ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                      : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
                  } focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
              </div>

              {/* Tutor Name */}
              <div>
                <label
                  htmlFor="tutorName"
                  className={`mb-1.5 block text-xs font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Tutor Name
                </label>

                <input
                  id="tutorName"
                  type="text"
                  value={tutor?.tutorName || ""}
                  readOnly
                  className={`w-full rounded-lg border px-3 py-2 text-xs font-medium outline-none ${
                    isDark
                      ? "border-gray-700 bg-gray-800 text-gray-300"
                      : "border-gray-200 bg-gray-100 text-gray-700"
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`mb-1.5 block text-xs font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className={`w-full rounded-lg border px-3 py-2 text-xs outline-none transition ${
                    isDark
                      ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                      : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
                  } focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 pt-2">

                {/* Cancel */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
                    isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  Cancel
                </button>

                {/* Confirm */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
                    isDark
                      ? "bg-white text-gray-900 hover:bg-gray-200"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {loading ? "Booking..." : "Confirm Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;