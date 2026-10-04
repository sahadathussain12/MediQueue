import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import MyBookedSessionsUI from "@/components/MyBookedSessionsUI";

export const metadata = {
  title: "My Sessions | MediQueue",
  description: "View your booked sessions.",
};  

const MySessionsPage = async () => {
  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/my-bookings`, {
    headers: {
      Authorization: `Bearer ${tokenData.token}`,
    },
    cache: "no-store",
  });

  const bookings = await res.json();

  return <MyBookedSessionsUI bookings={bookings}  token ={tokenData.token}/>;
};

export default MySessionsPage;