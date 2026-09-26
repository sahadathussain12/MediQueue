
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
import { authClient } from "@/lib/auth-clien";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  // =========================
  // Auth Session
  // =========================
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // =========================
  // Theme
  // =========================
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

  // =========================
  // Close Menu
  // =========================
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // =========================
  // Logout
  // =========================
  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Logout failed!");
      return;
    }

    toast.success("Logged out successfully!");

    setMenuOpen(false);

    router.push("/");
    router.refresh();
  };

  // =========================
  // User Initial
  // =========================
  const userInitial =
    user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-20 items-center justify-between px-4">

        {/* =========================
            Logo
        ========================= */}
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

        {/* =========================
            Desktop Navigation
        ========================= */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-7">

          {/* Home */}
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:text-base"
          >
            Home
          </Link>

          {/* Tutors */}
          <Link
            href="/tutors"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:text-base"
          >
            Tutors
          </Link>

          {/* Login Required Links */}
          {user && (
            <>
              <Link
                href="/add-tutor"
                className="text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:text-base"
              >
                Add Tutor
              </Link>

              <Link
                href="/my-tutors"
                className="text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:text-base"
              >
                My Tutors
              </Link>

              <Link
                href="/my-sessions"
                className="text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 xl:text-base"
              >
                My Sessions
              </Link>
            </>
          )}
        </div>

        {/* =========================
            Right Side
        ========================= */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">

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

          {/* =========================
              Desktop Auth
          ========================= */}
          <div className="hidden items-center justify-center lg:flex">

            {user ? (
              <div className="flex items-center justify-center gap-2 xl:gap-3">

                {/* Avatar */}
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name || "User"}
                    src={user?.image}
                  />

                  <Avatar.Fallback>
                    {user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || userInitial}
                  </Avatar.Fallback>
                </Avatar>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-600 xl:px-4"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">

                {/* Login */}
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="rounded-lg border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 xl:px-4"
                >
                  Login
                </Link>

                {/* Register */}
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-700 xl:px-4"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* =========================
              Mobile + Tablet Menu Button
          ========================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaXmark size={20} />
            ) : (
              <FaBars size={20} />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          Mobile + Tablet Menu
      ========================= */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 dark:border-gray-800 dark:bg-gray-950 lg:hidden">

          <div className="mx-auto flex max-w-3xl flex-col gap-1">

            {/* Home */}
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            >
              Home
            </Link>

            {/* Tutors */}
            <Link
              href="/tutors"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            >
              Tutors
            </Link>

            {/* Login Required Links */}
            {user && (
              <>
                <Link
                  href="/add-tutor"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                >
                  Add Tutor
                </Link>

                <Link
                  href="/my-tutors"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                >
                  My Tutors
                </Link>

                <Link
                  href="/my-sessions"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                >
                  My Sessions
                </Link>
              </>
            )}

            {/* =========================
                Mobile + Tablet Auth
            ========================= */}
            {user ? (
              <div className="mt-3 flex items-center justify-center gap-3 border-t border-gray-200 pt-5 dark:border-gray-800">

                {/* Avatar */}
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name || "User"}
                    src={user?.image}
                  />

                  <Avatar.Fallback>
                    {user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || userInitial}
                  </Avatar.Fallback>
                </Avatar>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="mt-3 flex gap-2 border-t border-gray-200 pt-5 dark:border-gray-800">

                {/* Login */}
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="flex-1 rounded-lg border border-gray-200 py-2 text-center font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Login
                </Link>

                {/* Register */}
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="flex-1 rounded-lg bg-blue-600 py-2 text-center font-medium text-white transition hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

