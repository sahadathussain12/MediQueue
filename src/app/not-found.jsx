
import Link from "next/link";
import { FaArrowLeft, FaGraduationCap } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
          <FaGraduationCap size={36} />
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-extrabold tracking-tight text-blue-600 sm:text-8xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
          Sorry, the page you are looking for doesn't exist or may have been
          moved to another location.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <FaArrowLeft size={15} />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;


