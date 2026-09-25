"use client";

import Link from "next/link";
import {
  FaGraduationCap,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t mt-5 border-gray-200 bg-white text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaGraduationCap size={21} />
              </div>

              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Medi<span className="text-blue-600">Queue</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              Find the right tutor, manage your learning sessions, and make your
              learning journey easier with MediQueue.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="https://www.facebook.com/share/1PkVoW89sX/"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:text-gray-300"
              >
                <FaFacebookF size={15} />
              </Link>

              <Link
                href="www.linkedin.com/in/sahadat-hussain12"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:text-gray-300"
              >
                <FaLinkedinIn size={15} />
              </Link>

              <Link
                href="https://github.com/sahadathussain12"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-gray-300"
              >
                <FaGithub size={15} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Learning Services
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  Find Tutors
                </a>
              </li>

              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  Add Tutor
                </a>
              </li>

              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  My Tutors
                </a>
              </li>

              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  My Sessions
                </a>
              </li>

              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  Learning Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  Login
                </a>
              </li>

              <li>
                <a href="#" className="text-sm transition hover:text-blue-600">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact Us
            </h3>

            <ul className="mt-4 space-y-4">
              {/* Location */}
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950">
                  <FaLocationDot size={14} />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950">
                  <FaPhone size={13} />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Phone
                  </p>

                  <a
                    href="tel:+880 1328-654064"
                    className="mt-1 block text-sm text-gray-500 transition hover:text-blue-600 dark:text-gray-400"
                  >
                    +880 1328-654064
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950">
                  <FaEnvelope size={13} />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Email
                  </p>

                  <a
                    href="mailto:info@mediqueue.com"
                    className="mt-1 block break-all text-sm text-gray-500 transition hover:text-blue-600 dark:text-gray-400"
                  >
                    sahadathussain872856@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              MediQueue
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="transition hover:text-blue-600">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
