
import {
  FaMagnifyingGlass,
  FaCalendarCheck,
  FaGraduationCap,
} from "react-icons/fa6";

const steps = [
  {
    id: 1,
    number: "01",
    icon: FaMagnifyingGlass,
    title: "Find Your Tutor",
    description:
      "Explore our tutors and find someone who matches your subject, learning goals, and preferences.",
  },
  {
    id: 2,
    number: "02",
    icon: FaCalendarCheck,
    title: "Book a Session",
    description:
      "Choose a suitable tutor and book a learning session at a time that works best for you.",
  },
  {
    id: 3,
    number: "03",
    icon: FaGraduationCap,
    title: "Start Learning",
    description:
      "Join your learning session, get personalized guidance, and take the next step toward your goals.",
  },
];

const ExtraSession2 = () => {
  return (
    <section className="bg-white py-16 dark:bg-gray-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Simple & Easy
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            How MediQueue Works
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            Finding the right tutor and starting your learning journey is
            simple. Just follow these three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-2xl border border-gray-200 bg-gray-50 p-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >
                {/* Number */}
                <div className="absolute right-5 top-5 text-3xl font-extrabold text-blue-100 dark:text-blue-900/50">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtraSession2;

