import BookingModal from "@/components/BookingModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const TutorsDetelsPage = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  

  // console.log(session?.user ,'session user email TutorsDetelsPage');
  const user = session?.user;
  const tokenData =await auth.api.getToken({
    headers:await headers()
  })


 const token = tokenData?.token;
 

  // console.log(token,'tokendata TutorsDetelsPage');

  const res = await fetch(`http://localhost:5000/alltutors/${id}`, {
    headers:{
     authorization:`Bearer ${token}`
    }
  });

  // console.log(res, "resss");

  const tutor = await res.json();

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl">
      
        <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
          <div className="grid md:grid-cols-12 gap-0">
            
        
            <div className="relative md:col-span-5 h-[300px] md:h-auto min-h-[380px] bg-gray-100 dark:bg-gray-800">
              <Image
                src={tutor.photo}
                alt={tutor.tutorName || "Tutor"}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover"
              />

           
              <div className="absolute left-4 top-4 z-10">
                <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-md dark:bg-gray-900/90 dark:text-blue-400">
                  {tutor.subject}
                </span>
              </div>
            </div>

 
            <div className="md:col-span-7 flex flex-col justify-between p-6 sm:p-8">
              <div>
             
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md">
                    Tutor Profile
                  </span>
                </div>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  {tutor.tutorName}
                </h1>

                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                  Get personalized learning support from an experienced tutor and book your session today.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  
          
                  <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 dark:bg-gray-800/60 dark:border-gray-800">
                    <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                      Experience
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
                      {tutor.experience}
                    </p>
                  </div>

                 
                  <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 dark:bg-gray-800/60 dark:border-gray-800">
                    <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                      Location
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {tutor.location}
                    </p>
                  </div>

            
                  <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 dark:bg-gray-800/60 dark:border-gray-800">
                    <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                      Teaching Mode
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
                      {tutor.teachingMode}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 dark:bg-gray-800/60 dark:border-gray-800">
                    <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                      Available Slots
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
                      {tutor.totalSlot}
                    </p>
                  </div>

                  {/* Session Start Date */}
                  <div className="col-span-2 rounded-xl bg-gray-50 p-3 border border-gray-100 dark:bg-gray-800/60 dark:border-gray-800">
                    <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                      Session Start Date
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
                      {tutor.sessionStartDate
                        ? new Date(tutor.sessionStartDate).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                              timeZone: "UTC",
                            },
                          )
                        : "Not Set"}
                    </p>
                  </div>
                </div>

                
                <div className="mt-5 flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 dark:border-blue-900/50 dark:bg-blue-950/30">
                  <div>
                    <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase">
                      Hourly Fee
                    </p>
                    <p className="mt-0.5 text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${tutor.hourlyFee}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase">
                      Category
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
                      {tutor.category}
                    </p>
                  </div>
                </div>
              </div>

            
              <div className="mt-6">
              <BookingModal tutor={tutor} user = {user} token ={token}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorsDetelsPage;