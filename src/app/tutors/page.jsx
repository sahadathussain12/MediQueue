const TutorsPage = async () => {
  const res = await fetch("http://localhost:5000/alltutors");

  const tutor = await res.json();

  console.log(tutor, tutor.length,'tuotr');

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Available Tutors
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Find the perfect tutor and start your learning journey today.
          </p>
        </div>

        {/* Tutor Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tutor.map((item) => (
            <div
              key={item._id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={item.photo}
                  alt={item.tutorName}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Name + Subject */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.tutorName}
                  </h2>

                  <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                    {item.subject}
                  </p>
                </div>

                {/* Tutor Info */}
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Experience:
                    </span>{" "}
                    {item.experience}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Institution:
                    </span>{" "}
                    {item.institution}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Location:
                    </span>{" "}
                    {item.location}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Available:
                    </span>{" "}
                    {item.availableDays}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Time:
                    </span>{" "}
                    {item.availableTime}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Teaching Mode:
                    </span>{" "}
                    {item.teachingMode}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Hourly Fee
                    </p>

                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      ${item.hourlyFee}
                      <span className="text-sm font-normal text-gray-500">
                        /hour
                      </span>
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Detels
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

export default TutorsPage;