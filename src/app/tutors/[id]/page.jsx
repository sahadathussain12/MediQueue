

const TutorsDetelsPage = async ({ params }) => {
  const { id } = await params;

  console.log(id,'id');

  const res = await fetch(`http://localhost:5000/alltutors/${id}`, {
    cache: "no-store",
  });
  console.log(res,'resss');

  if (!res.ok) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Tutor Not Found
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sorry, we could not find this tutor.
          </p>
        </div>
      </div>
    );
  }

  const tutor = await res.json();

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
          <div className="grid md:grid-cols-2">
            {/* Tutor Image */}
            <div className="relative h-[350px] md:h-[600px]">
              <img
                src={tutor.photo}
                alt={tutor.tutorName}
                className="h-full w-full object-cover"
              />

              {/* Subject Badge */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  {tutor.subject}
                </span>
              </div>
            </div>

            {/* Tutor Information */}
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Tutor Profile
              </p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                {tutor.tutorName}
              </h1>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                Get personalized learning support from an experienced tutor.
                Explore the tutor information and book a suitable learning
                session.
              </p>

              {/* Information */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Experience
                  </p>
                  <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                    {tutor.experience}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                    {tutor.location}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Teaching Mode
                  </p>
                  <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                    {tutor.teachingMode}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Available Slots
                  </p>
                  <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                    {tutor.totalSlot}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-8 flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Hourly Fee
                  </p>

                  <p className="mt-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                    ${tutor.hourlyFee}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Category
                  </p>

                  <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                    {tutor.category}
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Book This Tutor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorsDetelsPage;