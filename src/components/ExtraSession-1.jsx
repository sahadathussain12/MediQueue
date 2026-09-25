
import {
  FaBookOpen,
  FaChalkboardUser,
  FaClock,
  FaUsers,
} from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: FaChalkboardUser,
    title: "Expert Tutors",
    description:
      "Learn from experienced and skilled tutors who are ready to support your learning journey.",
  },
  {
    id: 2,
    icon: FaBookOpen,
    title: "Quality Learning",
    description:
      "Get personalized learning support and improve your knowledge with effective study sessions.",
  },
  {
    id: 3,
    icon: FaClock,
    title: "Flexible Sessions",
    description:
      "Choose suitable learning sessions and manage your study time according to your schedule.",
  },
  {
    id: 4,
    icon: FaUsers,
    title: "Learning Community",
    description:
      "Connect with tutors and other learners to create a helpful and engaging learning experience.",
  },
];

const ExtraSession1 = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Why MediQueue?
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need for Better Learning
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            MediQueue helps students find the right tutors, manage learning
            sessions, and make their learning journey easier and more effective.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon size={25} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtraSession1;

