const AvailableTutor = async () => {
  const res = await fetch("http://localhost:5000/tutors");

  const tutor = await res.json();

  return (
    <section className="bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Available Tutors
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Find the right tutor and start your learning journey.
          </p>
        </div>

        {/* Tutor Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutor.map((item) => (
            <div
              key={item._id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={item.photo}
                  alt={item.tutorName}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.tutorName}
                </h2>

                <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                  {item.subject}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Experience:
                    </span>{" "}
                    {item.experience}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Location:
                    </span>{" "}
                    {item.location}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                 

                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 w-full px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableTutor;