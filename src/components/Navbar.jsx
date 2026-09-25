
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaGraduationCap,
  FaBars,
  FaSun,
  FaMoon,
  FaXmark,
} from "react-icons/fa6";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newMode;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-20  items-center justify-between px-4">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <FaGraduationCap size={21} />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            Medi<span className="text-blue-600">Queue</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          <Link href="/" className="text-gray-700 dark:text-gray-300">
            Home
          </Link>

          <Link
            href="/tutors"
            className="text-gray-700 dark:text-gray-300"
          >
            Tutors
          </Link>

          <Link
            href="/add-tutor"
            className="text-gray-700 dark:text-gray-300"
          >
            Add Tutor
          </Link>

          <Link
            href="/my-tutors"
            className="text-gray-700 dark:text-gray-300"
          >
            My Tutors
          </Link>

          <Link
            href="/my-sessions"
            className="text-gray-700 dark:text-gray-300"
          >
            My Sessions
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <FaSun size={17} />
            ) : (
              <FaMoon size={17} />
            )}
          </button>

          {/* Desktop Auth */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>

            <Link href="/tutors" onClick={closeMenu}>
              Tutors
            </Link>

            <Link href="/add-tutor" onClick={closeMenu}>
              Add Tutor
            </Link>

            <Link href="/my-tutors" onClick={closeMenu}>
              My Tutors
            </Link>

            <Link href="/my-sessions" onClick={closeMenu}>
              My Sessions
            </Link>

            <div className="flex gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex-1 rounded-lg border border-gray-200 py-2 text-center dark:border-gray-700"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="flex-1 rounded-lg bg-blue-600 py-2 text-center text-white"
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

