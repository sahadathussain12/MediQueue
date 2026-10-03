"use client";

import { useRouter } from "next/navigation";

const SearchTutors = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    const data = Object.fromEntries(new FormData(e.currentTarget.form));

    if (data.search || data.startDate || data.endDate) {
      router.push(
        `/tutors?search=${data.search}&startDate=${data.startDate}&endDate=${data.endDate}`
      );
    }
  };

  const handleReset = (e) => {
    e.currentTarget.form.reset();
    router.push("/tutors");
  };

  return (
    <form
      className="mb-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-6"
    >
      <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Search Tutor
          </label>

          <input
            name="search"
            type="text"
            onBlur={handleSearch}
            placeholder="Search by name..."
            className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Start Date
          </label>

          <input
            name="startDate"
            type="date"
            onChange={handleSearch}
            className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
            End Date
          </label>

          <input
            name="endDate"
            type="date"
            onChange={handleSearch}
            className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchTutors;