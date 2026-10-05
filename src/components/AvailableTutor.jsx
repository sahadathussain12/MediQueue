import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const AvailableTutor = async () => {

  const session = await auth.api.getSession({
    headers: await headers(), 
  });

  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/tutors`, {});

  const tutor = await res.json();

  return (
    <section className="bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
      
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Available Tutors
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Find the right tutor and start your learning journey.
          </p>
        </div>

    
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutor.map((item) => (
            <div
              key={item._id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={item.photo}
                  alt={item.tutorName}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

        
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

         
                <div className="mt-5 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <Link
                    href={
                      user
                        ? `/tutors/${item._id}`
                        : `/login?redirect=/tutors/${item._id}`
                    }
                    className="block w-full rounded-xl bg-blue-600 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Details
                  </Link>
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
