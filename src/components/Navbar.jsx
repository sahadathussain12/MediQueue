"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaBars,
  FaSun,
  FaMoon,
  FaXmark,
} from "react-icons/fa6";

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [menuOpen, setMenuOpen] = useState(false);

 
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // ================= Toggle Theme =================
  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  // ================= Close Menu =================
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">

      {/* ================= Main Navbar ================= */}
      <div className="mx-auto flex h-18 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= Logo ================= */}
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={closeMenu}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <FaGraduationCap size={21} />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            Medi<span className="text-blue-600">Queue</span>
          </span>
        </a>


        {/* ================= Desktop Navigation ================= */}
        <div className="hidden items-center gap-5 lg:flex">

          <Link
            href="/"
            className="text-sm font-semibold text-gray-600 hover:text-blue-600 dark:text-gray-300"
          >
            Home
          </Link>

          <Link
            href="tutors"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          >
            Tutors
          </Link>

          <Link
            href="add-tutor"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          >
            Add Tutor
          </Link>

          <Link
            href="my-tutors"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          >
            My Tutors
          </Link>

          <Link
            href="my-sessions"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
          >
            My Sessions
          </Link>

        </div>


        {/* ================= Desktop Right Side ================= */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle dark and light mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <FaSun size={17} />
            ) : (
              <FaMoon size={17} />
            )}
          </button>


          {/* Login */}
          <Link
            href="login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Login
          </Link>


          {/* Register */}
          <Link
            href="register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </Link>

        </div>


        {/* ================= Tablet Right Side ================= */}
        <div className="hidden items-center gap-2 sm:flex lg:hidden">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle dark and light mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-yellow-400"
          >
            {darkMode ? (
              <FaSun size={15} />
            ) : (
              <FaMoon size={15} />
            )}
          </button>


          {/* Login */}
          <a
            href="#"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Login
          </a>


          {/* Register */}
          <a
            href="#"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </a>


          {/* Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {menuOpen ? <FaXmark size={19} /> : <FaBars size={19} />}
          </button>

        </div>


        {/* ================= Mobile Right Side ================= */}
        <div className="flex items-center gap-2 sm:hidden">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle dark and light mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-yellow-400"
          >
            {darkMode ? (
              <FaSun size={15} />
            ) : (
              <FaMoon size={15} />
            )}
          </button>


          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {menuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>

        </div>

      </div>


      {/* ================= Tablet Menu ================= */}
      {menuOpen && (
        <div className="hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 sm:block lg:hidden">

          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-6 py-4">

            <a
              href="#"
              onClick={closeMenu}
              className="rounded-lg bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-600 dark:bg-blue-950"
            >
              Home
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Tutors
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Add Tutor
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              My Tutors
            </a>

            <a
              href="#"
              onClick={closeMenu}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              My Sessions
            </a>

          </div>

        </div>
      )}


      {/* ================= Mobile Menu ================= */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 sm:hidden">

          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600 dark:bg-blue-950"
            >
              Home
            </Link>

            <Link
              href="tutors"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Tutors
            </Link>

            <Link
              href="add-tutor"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Add Tutor
            </Link>

            <Link
              href="my-tutors"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              My Tutors
            </Link>

            <Link
              href="my-sessions"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              My Sessions
            </Link>


            {/* Mobile Auth */}
            <div className="mt-2 border-t border-gray-200 pt-3 dark:border-gray-800">

              <Link
                href="login"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Login
              </Link>

              <Link
                href="register"
                onClick={closeMenu}
                className="mt-1 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Register
              </Link>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}